import ReactMarkdown from 'react-markdown';
import React from "react";

const Title = ({ title, description}) => {
    return (
        <div
            className="w-[100vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
            <h1 className="text-center text-[3vw]">{title}</h1>
            <div className="text-center text-[1vw]">
                <ReactMarkdown>
                    {description}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Title;
