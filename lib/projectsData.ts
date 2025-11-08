// Project data
export const projectsData = {
    'pathmentor': {
        title: 'PathMentor',
        subtitle: 'Personalized Learning Platform',
        description: 'AI-powered platform providing personalized learning path recommendations based on user preferences, goals, and learning styles. Combines data analysis with machine learning algorithms to suggest optimal learning resources and strategies tailored to individual student needs.',
        fullDescription: `PathMentor is a comprehensive learning platform that leverages artificial intelligence to create personalized educational journeys. The platform analyzes user preferences, learning patterns, and goals to recommend the most effective learning paths.

Key features include:
• Intelligent recommendation system using TensorFlow and Scikit-learn
• Personalized learning path generation
• Progress tracking and analytics
• Interactive learning modules
• Community features for peer learning
• Adaptive content difficulty based on performance`,
        techStack: ['Next.js', 'Supabase', 'Python', 'TensorFlow', 'Scikit-learn', 'TypeScript', 'Tailwind CSS'],
        liveUrl: 'https://path-mentor-seven.vercel.app/',
        githubUrl: '#',
        images: [
            '/images/projects/pathmentor/Screenshot 2025-11-08 124656.png',
            '/images/projects/pathmentor/Screenshot 2025-11-08 125114.png',
            '/images/projects/pathmentor/Screenshot 2025-11-08 125312.png'
        ],
        category: 'Full Stack Development',
        featured: true,
        status: 'Live'
    },
    'readle': {
        title: 'Readle',
        subtitle: 'Dyslexia Support Platform',
        description: 'A web-based platform designed to support students with dyslexia by providing interactive activities aimed at improving reading and comprehension skills. Offers personalized learning experiences and resources for parents.',
        fullDescription: `Readle is an innovative educational platform specifically designed to support students with dyslexia. The platform creates a safe, encouraging environment where students can improve their reading and comprehension skills through carefully crafted interactive activities.

Key features include:
• Interactive reading exercises tailored for dyslexic students
• Comprehensive parent resources and guidance
• Progress tracking and performance analytics
• Adaptive learning algorithms
• Accessibility-first design principles
• Community support system
• Expert-backed learning techniques
• Multi-sensory learning approaches`,
        techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'CSS3', 'Responsive Design'],
        liveUrl: 'https://readle-sigma.vercel.app/',
        githubUrl: '#',
        images: [
            '/images/projects/readle/Screenshot 2025-11-08 085319.png',
            '/images/projects/readle/Screenshot 2025-11-08 085329.png',
            '/images/projects/readle/Screenshot 2025-11-08 085349.png'
        ],
        category: 'Educational Technology',
        featured: true,
        status: 'Live'
    },
    'cv-chatbot': {
        title: 'CV ChatBot with Email',
        subtitle: 'Interactive Resume Assistant',
        description: 'A web application built on an MCP server that allows users to interact with their CV, receive automated responses, and send emails directly from the platform. Deployed on Vercel (frontend) and Railway (backend).',
        fullDescription: `CV ChatBot is an innovative application that transforms traditional resume interaction into a dynamic, conversational experience. Built with a microservice architecture, it provides users with an intelligent assistant that can answer questions about professional experience and facilitate direct communication.

Key features include:
• Intelligent CV parsing and analysis
• Natural language processing for resume queries
• Automated email integration
• Real-time chat interface
• Professional response generation
• Contact form automation
• Microservice architecture with MCP server
• Scalable backend infrastructure`,
        techStack: ['React', 'Node.js', 'Express.js', 'Railway', 'Vercel', 'MCP Server', 'JavaScript', 'REST API'],
        liveUrl: 'https://busy-cv-mcp.vercel.app/',
        githubUrl: '#',
        images: [
            '/images/projects/cv-chatbot/Screenshot 2025-11-08 124724.png'
        ],
        category: 'Web Application',
        featured: true,
        status: 'Live'
    },
    'brandboost': {
        title: 'BrandBoost',
        subtitle: 'Influencer Marketing Platform',
        description: 'Comprehensive platform connecting social media influencers with business owners for seamless product promotion. Developed as a collaborative second-year project with focus on user experience and system reliability.',
        fullDescription: `BrandBoost is a comprehensive influencer marketing platform that bridges the gap between social media influencers and business owners. The platform streamlines the entire collaboration process, from discovery to campaign management and payment processing.

Key features include:
• Influencer discovery and matching system
• Campaign management dashboard
• Automated contract generation
• Payment processing integration
• Performance analytics and reporting
• Review and rating system
• Real-time messaging system
• Multi-tier user management
• Advanced search and filtering`,
        techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Custom MVC Framework', 'Responsive Design'],
        liveUrl: null,
        githubUrl: '#',
        images: [
            '/images/projects/brandboost/1746206830084.jpeg',
            '/images/projects/brandboost/1746206879538.jpeg',
            '/images/projects/brandboost/1746206948221.jpeg',
            '/images/projects/brandboost/1746206988992.jpeg'
        ],
        category: 'Web Development',
        featured: false,
        status: 'In Development'
    }
};

export type ProjectData = typeof projectsData[keyof typeof projectsData];
export type ProjectSlug = keyof typeof projectsData;