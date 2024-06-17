import ReactMarkdown from 'react-markdown';
import React from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const EmbedMedia = ({ title, url, description}) => {
    return (
        <div
            className="w-[66vw] h-auto bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[2vw] mx-auto items-center">

            {!title ? <div></div> :
                <h1 className="text-center text-[2vw]">{title}</h1>
            }

            <iframe
                src={url}
                className=" mx-auto mb-8"
                style={{
                    width: '40vw', // 画面幅の40%
                    height: 'calc(40vw / 16 * 9)', // A4サイズの比率（幅×1.414）
                    border: 'none',
                }}
                allowFullScreen
            />

            {!description ? <div></div> :
                <div className="text-center text-[1vw]">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {description}
                    </ReactMarkdown>
                </div>
            }
        </div>
    );
};

export default EmbedMedia;
