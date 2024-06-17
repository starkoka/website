import React from 'react';
import Link from "next/link";
import WorksPage from "../../../../components/worksPage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EmbedMedia from "../../../../components/embedMedia";

const Project = () => {
    const images = [
        '../../../../images/works/Hizk/1.png',
        '../../../../images/works/Hizk/2.png',
        '../../../../images/works/Hizk/3.png'
    ];

    const body = "Hizkは、従来のIMEと異なり、意味から元の言葉を推測して変換することを行います。近年流行りのLLMを用いることで元の言葉を推測して返しています。\n\nオープンソースのIMEであるMozcをベースに、VisualC++で開発しました。詳細は以下のスライドに説明があります。\n\nOpenAI APIkeyがあれば、GitHubから自分でビルドして試すことも可能です。"

    return (
        <WorksPage
            title="Hizk"
            description={'GPT-4搭載の「意味から変換する」次世代IMEです。\n\nKloudハッカソン#4で優秀賞を受賞しました。'}
            icons={
                <div
                    className="w-[50px] flex justify-center  bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[2vw] mx-auto">
                    <Link href="https://github.com/Team-Hmm/Hizk" target="_blank">
                        <svg className="w-[30px] ml-0.5" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path fill="#5B43F0"
                                  d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                        </svg>
                    </Link>
                </div>
            }
            body={body}
            images={images}
            other={
                <EmbedMedia
                    title="Hizk 紹介スライド"
                    url="https://drive.google.com/file/d/1Ydly9ZT3KlIgLGKCVJ-H8Qp2gEDKhET0/preview"
                    description="Kloudハッカソン#4での発表スライドです。"
                />
            }
        />
    );
};

export default Project;