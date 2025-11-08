import { projectsData, ProjectSlug } from '@/lib/projectsData';
import type { Metadata } from 'next';

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