'use client';

import { Github, Linkedin, Mail, Menu, X, ExternalLink, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Chatbot from '@/components/Chatbot';
import { projectsData } from '@/lib/projectsData';

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
                            {['Home', 'About', 'Skills', 'Projects', 'Learning', 'Contact'].map((item) => (
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
                            {['Home', 'About', 'Skills', 'Projects', 'Learning', 'Contact'].map((item) => (
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
            <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="max-w-5xl mx-auto text-center animate-fade-in relative z-10">
                    {/* Profile Image */}
                    <div className="mb-12">
                        <div className="relative w-40 h-40 mx-auto mb-8 group">
                            {/* Gradient Ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                                <div className="w-full h-full rounded-full bg-black"></div>
                            </div>
                            {/* Profile Image */}
                            <Image
                                src="/images/profile/profile.png"
                                alt="Nadun Sandanayaka"
                                fill
                                className="rounded-full object-cover relative z-10 border-4 border-black group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>

                    {/* Greeting Badge */}
                    <div className="inline-block mb-6">
                        <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium backdrop-blur-sm">
                            👋 Welcome to my portfolio
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Nadun Sandanayaka
                        </span>
                    </h1>

                    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
                        Full Stack Developer
                    </p>

                    <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Crafting innovative solutions with AI, cloud technologies, and modern web frameworks.
                        Passionate about building scalable, data-driven applications that solve real-world problems.
                    </p>

                    <div className="flex justify-center gap-4 mb-12">
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('projects');
                            }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('contact');
                            }}
                            className="px-8 py-4 bg-gray-800/80 backdrop-blur-sm border-2 border-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-700 hover:border-purple-500/50 transition-all duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <Github size={28} className="group-hover:scale-110 transition-transform duration-300" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <Linkedin size={28} className="group-hover:scale-110 transition-transform duration-300" />
                        </a>
                        <a
                            href="mailto:nadunsandanayaka01@gmail.com"
                            className="group p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <Mail size={28} className="group-hover:scale-110 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                                Who I Am
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
                        </h2>
                    </div>

                    <div className="relative group">
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Content card */}
                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
                            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed text-center">
                                A passionate <span className="text-purple-400 font-semibold">full-stack developer</span> with a strong focus on building
                                <span className="text-blue-400 font-semibold"> scalable, data-driven applications</span> and leveraging
                                <span className="text-pink-400 font-semibold"> cloud technologies</span> to solve real-world challenges.
                                I thrive on transforming complex problems into elegant, efficient solutions using cutting-edge technologies and best practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                                Expertise
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Technical <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A comprehensive toolkit for building modern, scalable applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Programming',
                                skills: ['Python', 'JavaScript', 'Java', 'PHP'],
                                icon: '💻',
                                gradient: 'from-blue-500 to-cyan-500'
                            },
                            {
                                title: 'Web Development',
                                skills: ['React', 'Next.js', 'Node.js', 'Express.js'],
                                icon: '🌐',
                                gradient: 'from-purple-500 to-pink-500'
                            },
                            {
                                title: 'Databases',
                                skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
                                icon: '🗄️',
                                gradient: 'from-green-500 to-emerald-500'
                            },
                            {
                                title: 'Cloud & DevOps',
                                skills: ['AWS', 'Docker', 'Apache Airflow'],
                                icon: '☁️',
                                gradient: 'from-orange-500 to-red-500'
                            },
                            {
                                title: 'AI/ML',
                                skills: ['TensorFlow', 'Scikit-learn', 'Keras', 'Ollama', 'LangChain'],
                                icon: '🤖',
                                gradient: 'from-indigo-500 to-purple-500'
                            }
                        ].map((category, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {category.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                        {category.title}
                                    </h3>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIdx) => (
                                            <span
                                                key={skillIdx}
                                                className="px-4 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg text-sm text-gray-200 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                                Portfolio
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Featured <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Explore my latest work in web development, AI/ML, and cloud solutions
                        </p>
                    </div>

                    {/* Main Projects Grid */}
                    <div className="space-y-32">
                        {Object.entries(projectsData).map(([slug, project], idx) => (
                            <div
                                key={slug}
                                className="relative group"
                            >
                                {/* Background Glow Effect */}
                                <div className={`absolute -inset-4 bg-gradient-to-r ${idx % 2 === 0
                                    ? 'from-blue-500/5 via-purple-500/5 to-pink-500/5'
                                    : 'from-pink-500/5 via-purple-500/5 to-blue-500/5'
                                    } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className={`relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                    }`}>
                                    {/* Project Image */}
                                    <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                                        <div className="relative">
                                            {/* Main Image Container */}
                                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-2xl group-hover:border-purple-500/50 transition-all duration-500">
                                                <Image
                                                    src={project.images[0]}
                                                    alt={`${project.title} Screenshot`}
                                                    width={800}
                                                    height={500}
                                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                                />
                                                {/* Overlay on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </div>

                                            {/* Floating accent */}
                                            <div className={`absolute -bottom-6 ${idx % 2 === 1 ? '-left-6' : '-right-6'} z-10 hidden lg:block`}>
                                                <div className={`w-32 h-32 bg-gradient-to-r ${idx % 2 === 0 ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'
                                                    } rounded-2xl blur-2xl opacity-30`}></div>
                                            </div>

                                            {/* Number Badge */}
                                            <div className={`absolute -top-6 ${idx % 2 === 1 ? '-right-6' : '-left-6'} w-16 h-16 bg-gradient-to-br ${idx % 2 === 0 ? 'from-blue-600 to-cyan-600' : 'from-purple-600 to-pink-600'
                                                } rounded-2xl flex items-center justify-center font-bold text-2xl shadow-2xl`}>
                                                {String(idx + 1).padStart(2, '0')}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className={`lg:col-span-5 space-y-8 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                        {/* Status & Category */}
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${project.status === 'Live'
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10'
                                                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 shadow-lg shadow-yellow-500/10'
                                                }`}>
                                                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${project.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'
                                                    } animate-pulse`}></span>
                                                {project.status}
                                            </span>
                                            <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-sm text-gray-400">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Title & Subtitle */}
                                        <div className="space-y-3">
                                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                {project.subtitle}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-lg text-gray-300 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div>
                                            <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider font-semibold">Tech Stack</p>
                                            <div className="flex flex-wrap gap-3">
                                                {project.techStack.slice(0, 6).map((tech, techIdx) => (
                                                    <span
                                                        key={techIdx}
                                                        className="px-4 py-2 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-lg text-sm text-gray-200 font-medium hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 6 && (
                                                    <span className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-gray-500 font-medium">
                                                        +{project.techStack.length - 6} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-4 pt-4">
                                            <Link
                                                href={`/projects/${slug}`}
                                                className="group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                                            >
                                                View Details
                                                <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </Link>
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/btn inline-flex items-center px-8 py-4 bg-gray-800/80 backdrop-blur-sm border-2 border-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-700 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300"
                                                >
                                                    <ExternalLink size={20} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Projects Section */}
            <section id="learning" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
                                Continuous Learning
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Learning <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Journey</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Exploring new technologies and sharpening skills through hands-on practice projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'React Component Library',
                                description: 'Custom reusable React components with Storybook documentation',
                                tech: ['React', 'Storybook', 'TypeScript', 'CSS3'],
                                status: 'In Progress',
                                icon: '🧩'
                            },
                            {
                                title: 'Python Data Analysis',
                                description: 'Data visualization and analysis using pandas and matplotlib',
                                tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
                                status: 'Completed',
                                icon: '📊'
                            },
                            {
                                title: 'Docker Microservices',
                                description: 'Containerized microservices architecture with Docker',
                                tech: ['Docker', 'Node.js', 'Redis', 'MongoDB'],
                                status: 'In Progress',
                                icon: '🐳'
                            },
                            {
                                title: 'GraphQL API',
                                description: 'Modern API development with GraphQL and Apollo',
                                tech: ['GraphQL', 'Apollo', 'Node.js', 'PostgreSQL'],
                                status: 'Completed',
                                icon: '🔗'
                            },
                            {
                                title: 'Machine Learning Models',
                                description: 'Implementing various ML algorithms from scratch',
                                tech: ['Python', 'NumPy', 'Scikit-learn', 'TensorFlow'],
                                status: 'Ongoing',
                                icon: '🤖'
                            },
                            {
                                title: 'Cloud Infrastructure',
                                description: 'Infrastructure as Code using Terraform and AWS',
                                tech: ['Terraform', 'AWS', 'CloudFormation', 'EC2'],
                                status: 'Learning',
                                icon: '☁️'
                            }
                        ].map((project, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
                            >
                                {/* Icon with Gradient Background */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <div className="relative text-6xl">{project.icon}</div>
                                </div>

                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 backdrop-blur-sm ${project.status === 'Completed'
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : project.status === 'In Progress'
                                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIdx) => (
                                        <span
                                            key={techIdx}
                                            className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg text-xs text-gray-300 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
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
            <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="mb-12">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium">
                                Let&apos;s Connect
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                        <a
                            href="mailto:nadunsandanayaka01@gmail.com"
                            className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <Mail size={24} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                            Send me an email
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-10 py-5 bg-gray-800/80 backdrop-blur-sm border-2 border-gray-700 rounded-xl font-bold text-xl hover:bg-gray-700 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300"
                        >
                            <Linkedin size={24} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                            Connect on LinkedIn
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="pt-8 border-t border-gray-800">
                        <p className="text-gray-500 mb-6">Find me on social media</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <Github size={28} className="group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <Linkedin size={28} className="group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300" />
                            </a>
                            <a
                                href="mailto:nadunsandanayaka01@gmail.com"
                                className="group p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <Mail size={28} className="group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-500">&copy; 2025 Nadun Sandanayaka. All rights reserved.</p>
                </div>
            </footer>

            {/* Chatbot */}
            <Chatbot />
        </>
    );
}
