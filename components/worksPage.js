import React from 'react';
import SectionTitle from './title.js';
import Carousel from "./carousel";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const WorksPage = ({ title, description, icons = [], body, images = [], other = null }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <SectionTitle title={title} description={description} />

            {icons.length === 0 ? null : (
                <div className="flex justify-center mb-6">{icons}</div>
            )}

            <div className="card p-4 md:p-8 mb-6 md:mb-8">
                <div className="prose-custom text-sm md:text-base">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {body}
                    </ReactMarkdown>
                </div>
            </div>

            {other}

            {images.length > 0 && (
                <div className="card p-4 md:p-6 mt-6 md:mt-8">
                    <Carousel images={images} />
                </div>
            )}
        </div>
    );
};

export default WorksPage;