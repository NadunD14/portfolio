import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_INSTRUCTION = `You are a professional and polite Digital Assistant for Nadun Sandanayaka, a Full Stack Developer.

Your role is to answer questions EXCLUSIVELY about Nadun Sandanayaka's professional profile using ONLY the following information:

**Professional Summary:**
Nadun Sandanayaka is a passionate full-stack developer with a strong focus on building scalable, data-driven applications and leveraging cloud technologies to solve real-world challenges.

**Technical Skills:**
- Programming: Python, JavaScript, Java, PHP
- Web Development: React, Next.js, Node.js, Express.js
- Databases: PostgreSQL, MongoDB, MySQL
- Cloud & DevOps: AWS, Docker, Apache Airflow
- AI/ML: TensorFlow, Scikit-learn, Keras, Ollama, LangChain

**Featured Projects:**

1. Real-Time Notification Service
   - Description: Scalable real-time notification service deployed on AWS
   - Tech Stack: Node.js, Express.js, Docker, AWS
   - Details: Handles thousands of concurrent connections with low latency

2. LangChain AI Project
   - Description: A hands-on project exploring LangChain for building AI-driven natural language applications
   - Tech Stack: Python, LangChain, OpenAI, Vector DB
   - Details: Advanced context management and natural language processing

**Important Instructions:**
- Answer questions politely and professionally
- Only provide information from the above profile
- If asked about topics not related to Nadun's profile, politely decline and redirect to his professional expertise
- Keep responses concise and relevant
- You can elaborate on the technologies mentioned if asked
- If you don't have specific information, acknowledge it honestly

Example responses for off-topic questions:
- "I'm here to help you learn about Nadun Sandanayaka's professional background. Is there anything specific you'd like to know about his skills or projects?"
- "That's an interesting question, but I'm specifically designed to discuss Nadun's professional experience. Would you like to know more about his work with cloud technologies or AI/ML projects?"`;

export async function POST(request: NextRequest) {
    try {
        const { message, history } = await request.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { error: 'Gemini API key not configured' },
                { status: 500 }
            );
        }

        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            systemInstruction: SYSTEM_INSTRUCTION,
        });

        // Convert chat history to Gemini format
        const chatHistory = history.slice(1).map((msg: { role: string; content: string }) => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
        }));

        const chat = model.startChat({
            history: chatHistory,
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ message: text });
    } catch (error) {
        console.error('Error in Gemini API route:', error);
        return NextResponse.json(
            { error: 'Failed to process your request' },
            { status: 500 }
        );
    }
}
