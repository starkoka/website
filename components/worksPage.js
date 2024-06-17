import React from 'react';
import Title from './title.js';
import Carousel from "./carousel";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const WorksPage = ({ title, descriptionm, icons, body, images})  => {

    return (
        <div className="items-center">
            <Title
                title={title}
                description={descriptionm}
            />

            {icons}

            <div
                className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[2vw] mx-auto">
                <ReactMarkdown className="ml-[2vw]" remarkPlugins={[remarkGfm]}>
                    {body}
                </ReactMarkdown>
            </div>
            <div
                className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw] mx-auto">
                <div className="m-5"><Carousel images={images}/></div>
            </div>
        </div>
    );
};

export default WorksPage;