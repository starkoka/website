import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Tile = ({ title, description }) => {
    return (
        <div className="card p-6 w-full">
            <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                {title}
            </h3>
            <div className="prose-custom text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {description}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Tile;
