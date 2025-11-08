'use client';

import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Chatbot from '@/components/Chatbot';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            NS
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-300"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-black/95 border-t border-gray-800">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Nadun Sandanayaka
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 mb-8">
                        Full Stack Developer & Cloud Architect
                    </p>
                    <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                        Building scalable, data-driven applications with modern technologies
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:contact@example.com"
                            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                        About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 sm:p-12">
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                            A passionate full-stack developer with a strong focus on building scalable, data-driven applications
                            and leveraging cloud technologies to solve real-world challenges. I thrive on transforming complex
                            problems into elegant, efficient solutions using cutting-edge technologies and best practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                        Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Programming',
                                skills: ['Python', 'JavaScript', 'Java', 'PHP']
                            },
                            {
                                title: 'Web Development',
                                skills: ['React', 'Next.js', 'Node.js', 'Express.js']
                            },
                            {
                                title: 'Databases',
                                skills: ['PostgreSQL', 'MongoDB', 'MySQL']
                            },
                            {
                                title: 'Cloud & DevOps',
                                skills: ['AWS', 'Docker', 'Apache Airflow']
                            },
                            {
                                title: 'AI/ML',
                                skills: ['TensorFlow', 'Scikit-learn', 'Keras', 'Ollama', 'LangChain']
                            }
                        ].map((category, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-purple-400">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className="px-3 py-1 bg-gray-800/80 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                        Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Real-Time Notification Service',
                                description: 'Scalable real-time notification service deployed on AWS, handling thousands of concurrent connections with low latency.',
                                tech: ['Node.js', 'Express.js', 'Docker', 'AWS'],
                                gradient: 'from-blue-500 to-cyan-500'
                            },
                            {
                                title: 'LangChain AI Project',
                                description: 'A hands-on project exploring LangChain for building AI-driven natural language applications with advanced context management.',
                                tech: ['Python', 'LangChain', 'OpenAI', 'Vector DB'],
                                gradient: 'from-purple-500 to-pink-500'
                            }
                        ].map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
                            >
                                <div className={`h-1 w-20 bg-gradient-to-r ${project.gradient} rounded-full mb-6 group-hover:w-32 transition-all duration-300`}></div>
                                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIdx) => (
                                        <span
                                            key={techIdx}
                                            className="px-3 py-1 bg-gray-800/80 rounded-full text-sm text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12">
                        Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href="mailto:contact@example.com"
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                        >
                            Send me an email
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-gray-800 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-200"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-8 px-4">
                <div className="max-w-7xl mx-auto text-center text-gray-500">
                    <p>&copy; 2025 Nadun Sandanayaka. All rights reserved.</p>
                </div>
            </footer>

            {/* Chatbot */}
            <Chatbot />
        </>
    );
}
