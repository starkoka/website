import React from 'react';
import Title from './title.js';
import Carousel from "./carousel";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const nothing = () => {
    return <div></div>
}

const WorksPage = ({ title, description, icons=[], body, images=[], other=nothing()})  => {

    return (
        <div className="items-center">
            <Title
                title={title}
                description={description}
            />

            {icons.length === 0 ? <div></div> : icons}

            <div
                className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[2vw] mx-auto">
                <ReactMarkdown className="ml-[2vw]" remarkPlugins={[remarkGfm]}>
                    {body}
                </ReactMarkdown>
            </div>


            {other ?? nothing()}

            {images.length === 0 ? <div></div> :
                <div
                    className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw] mx-auto">
                    <div className="m-5"><Carousel images={images}/></div>
                </div>
            }
        </div>
    );
};

export default WorksPage;