import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectsData, ProjectSlug } from '@/lib/projectsData';
import { ArrowLeft, ExternalLink, Github, Calendar, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import ProjectImageGallery from '@/components/ProjectImageGallery';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
    const project = projectsData[params.slug as ProjectSlug];

    if (!project) {
        return {
            title: 'Project Not Found - Nadun Sandanayaka',
            description: 'The requested project could not be found.'
        };
    }

    return {
        title: `${project.title} - ${project.subtitle} | Nadun Sandanayaka`,
        description: project.description,
        openGraph: {
            title: `${project.title} - ${project.subtitle}`,
            description: project.description,
            images: project.images[0] ? [project.images[0]] : [],
        },
    };
}

export function generateStaticParams() {
    return Object.keys(projectsData).map((slug) => ({
        slug: slug,
    }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projectsData[params.slug as ProjectSlug];

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link
                            href="/#projects"
                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            <ArrowLeft size={20} />
                            <span>Back to Portfolio</span>
                        </Link>
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            NS
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center space-x-4 mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Live'
                                    ? 'bg-green-900/30 text-green-400 border border-green-800'
                                    : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                                }`}>
                                {project.status}
                            </span>
                            <span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-400">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-400 mb-8">
                            {project.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                                >
                                    <ExternalLink size={20} className="mr-2" />
                                    View Live
                                </a>
                            )}
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gray-800 border border-gray-700 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-200"
                            >
                                <Github size={20} className="mr-2" />
                                View Code
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Main Image */}
                        <ProjectImageGallery images={project.images} projectTitle={project.title} />

                        {/* Project Info */}
                        <div className="space-y-8">
                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
                                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                    {project.fullDescription}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar size={24} className="text-purple-400" />
                            </div>
                            <h4 className="font-semibold mb-2">Development Timeline</h4>
                            <p className="text-gray-400">2-3 months of active development</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users size={24} className="text-blue-400" />
                            </div>
                            <h4 className="font-semibold mb-2">Team Size</h4>
                            <p className="text-gray-400">{project.title === 'BrandBoost' ? '4 developers' : 'Solo project'}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin size={24} className="text-green-400" />
                            </div>
                            <h4 className="font-semibold mb-2">Deployment</h4>
                            <p className="text-gray-400">{project.liveUrl ? 'Production Ready' : 'In Development'}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-8 px-4">
                <div className="max-w-7xl mx-auto text-center text-gray-500">
                    <p>&copy; 2025 Nadun Sandanayaka. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}