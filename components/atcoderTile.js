'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function AtcoderTile({title, description}) {
    const [data, setData] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const responseA = await fetch("/api/atcoder");
            const responseH = await fetch("/api/atcoder?type=H");

            const resultA = await responseA.json();
            const resultH = await responseH.json();
            const result = {
                colorA:resultA.color,
                ratingA:resultA.message,
                colorH:resultH.color,
                ratingH:resultH.message,
            }
            setData(result);
        }
        fetchData();
    }, []);

    if (!data) {
        return <div
            className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
            <h1 className="text-center text-[1.5vw]">{title}</h1>
            <div className="text-center text-[1vw]">
                <p>loading...</p>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {description}
                </ReactMarkdown>
                <Link href="https://atcoder.jp/users/kokastar" target="_blank"><p
                    className="mt-[1vw] underline">AtCoderアカウント</p></Link>
            </div>
        </div>;
    }

    return (
        <div
            className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw] p-4">
            <h1 className="text-center text-[1.5vw]">{title}</h1>
            <div className="text-center text-[1vw]">
                <a>Algorithm:</a><a style={{color: data.colorA}}>{data.ratingA}</a><a> / </a>
                <a>Heuristic:</a><a style={{color: data.colorH}}>{data.ratingH}</a>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {description}
                </ReactMarkdown>
                <Link href="https://atcoder.jp/users/kokastar" target="_blank"><p
                    className="mt-[2vw] underline">AtCoderアカウント</p></Link>
            </div>
        </div>
    );
}