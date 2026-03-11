import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ProjectCard = ({ title, description, linkText, linkUrl }) => {
    const isInternal = linkUrl && linkUrl.startsWith('/');

    return (
        <div className="card p-6 w-full flex flex-col">
            <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                {title}
            </h3>
            <div className="prose-custom text-sm md:text-base flex-grow" style={{ color: 'var(--color-text-secondary)' }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {description}
                </ReactMarkdown>
            </div>
            {linkUrl && (
                <div className="mt-4 pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <Link
                        href={linkUrl}
                        target={isInternal ? undefined : "_blank"}
                        rel={isInternal ? undefined : "noopener noreferrer"}
                        className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-2.5"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        {linkText}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
