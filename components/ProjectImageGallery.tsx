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
        <div className="relative select-none">
            {/* Main image area */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 flex items-center justify-center">
                {images && images.length > 0 ? (
                    <Image
                        src={images[selectedImage]}
                        alt={`${projectTitle} Screenshot ${selectedImage + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                        priority={selectedImage === 0}
                    />
                ) : (
                    <div className="text-gray-500">No images available</div>
                )}

                {/* Prev/Next controls */}
                {images && images.length > 1 && (
                    <>
                        <button
                            type="button"
                            aria-label="Previous image"
                            onClick={() => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 p-2 backdrop-blur-sm transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-white"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button
                            type="button"
                            aria-label="Next image"
                            onClick={() => setSelectedImage((prev) => (prev + 1) % images.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 p-2 backdrop-blur-sm transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-white"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </>
                )}
            </div>
            {/* Thumbnail Navigation */}
            {images && images.length > 1 && (
                <div className="relative z-10 flex space-x-2 mt-4 overflow-x-auto pb-2">
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
