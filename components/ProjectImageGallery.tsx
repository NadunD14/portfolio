'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectImageGalleryProps {
    images: string[];
    projectTitle: string;
}

export default function ProjectImageGallery({ images, projectTitle }: ProjectImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 flex items-center justify-center">
                <Image
                    src={images[selectedImage]}
                    alt={`${projectTitle} Screenshot ${selectedImage + 1}`}
                    fill
                    className="object-contain"
                />
            </div>
            {/* Thumbnail Navigation */}
            {images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImage === index
                                ? 'border-purple-500'
                                : 'border-gray-700 hover:border-gray-600'
                                }`}
                        >
                            <Image
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                width={80}
                                height={48}
                                className="object-contain w-full h-full bg-gray-800"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
