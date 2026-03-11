'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function AtcoderTile({ title, description }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const [responseA, responseH] = await Promise.all([
                    fetch("/api/atcoder"),
                    fetch("/api/atcoder?type=H"),
                ]);
                const resultA = await responseA.json();
                const resultH = await responseH.json();
                setData({
                    colorA: resultA.color,
                    ratingA: resultA.message,
                    colorH: resultH.color,
                    ratingH: resultH.message,
                });
            } catch {
                setData({ error: true });
            }
        }
        fetchData();
    }, []);

    return (
        <div className="card p-6 w-full flex flex-col">
            <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                {title}
            </h3>
            <div className="text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                {!data ? (
                    <div className="space-y-2 mb-3">
                        <div className="skeleton h-5 w-48" />
                        <div className="skeleton h-4 w-32" />
                    </div>
                ) : data.error ? (
                    <p className="mb-3" style={{ color: 'var(--color-text-muted)' }}>レーティングを取得できませんでした</p>
                ) : (
                    <div className="flex flex-wrap gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium"
                            style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-primary)' }}>
                            Algorithm:
                            <span className="font-bold" style={{ color: data.colorA }}>{data.ratingA}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium"
                            style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-primary)' }}>
                            Heuristic:
                            <span className="font-bold" style={{ color: data.colorH }}>{data.ratingH}</span>
                        </span>
                    </div>
                )}
                <div className="prose-custom">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {description}
                    </ReactMarkdown>
                </div>
                <div className="mt-4 pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <Link
                        href="https://atcoder.jp/users/kokastar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-2.5"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        AtCoderアカウント
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}