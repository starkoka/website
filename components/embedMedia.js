import ReactMarkdown from 'react-markdown';
import React from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const EmbedMedia = ({ title, url, description }) => {
    return (
        <div className="card p-4 md:p-6 w-full my-4 md:my-6 mx-auto max-w-4xl">
            {title && (
                <h3 className="text-lg md:text-xl font-bold mb-4 text-center" style={{ color: 'var(--color-text-primary)' }}>
                    {title}
                </h3>
            )}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
                <iframe
                    src={url}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
            {description && (
                <div className="prose-custom mt-4 text-center text-sm md:text-base">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {description}
                    </ReactMarkdown>
                </div>
            )}
        </div>
    );
};

export default EmbedMedia;
