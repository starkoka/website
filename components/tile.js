import ReactMarkdown from 'react-markdown';

const Tile = ({ title, description}) => {
    return (
        <div className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw] p-4">
            <h1 className="text-center text-[1.5vw]">{title}</h1>
            <div className="text-center text-[1vw]">
                <ReactMarkdown>
                    {description}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Tile;
