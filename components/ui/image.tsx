import React from 'react';

interface ResponsiveImageProps {
    src: string;
    alt: string;
    sizes?: string;
    width: number;
    height: number;
    className?: string;
    placeholderSrc?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
                                                             src,
                                                             alt,
                                                             sizes,
                                                             width,
                                                             height,
                                                             className,
                                                             placeholderSrc
                                                         }) => {
    return (
        <div className={`relative ${className}`}>
            {placeholderSrc && (
                <img
                    src={placeholderSrc}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                />
            )}
            <img
                src={src}
                alt={alt}
                sizes={sizes}
                width={width}
                height={height}
                className={`w-full h-auto rounded-md transition-opacity duration-300 ${placeholderSrc ? 'opacity-0' : 'opacity-100'}`}
                onLoad={(e) => {
                    const imgElement = e.currentTarget;
                    imgElement.style.opacity = '1';
                }}
            />
        </div>
    );
};

export default ResponsiveImage;
