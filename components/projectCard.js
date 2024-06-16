import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const ProjectCard = ({ title, description, linkText, linkUrl }) => {
    return (
        <div className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw] p-4">
            <h1 className="text-center text-[1.5vw]">{title}</h1>
            <div className="text-center text-[1vw]">
                <ReactMarkdown>
                    {description}
                </ReactMarkdown>
                <Link href={linkUrl}>
                    <p className="mt-[2vw] underline">{linkText}</p>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
