import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

const Tile = ({ title, description, iconURL}) => {
    return (
        <div
            className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[15.75vw] p-4">
            <h1 className="text-center text-[1.5vw]">{title}</h1>
            <img src={iconURL} alt={title} className="m-auto"/>
            <div className="text-center text-[1.5vw]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {description}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Tile;
