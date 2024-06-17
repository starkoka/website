import React from 'react';
import Link from "next/link";
import WorksPage from "../../../../components/worksPage";
import EmbedMedia from "../../../../components/embedMedia";

const Project = () => {
    const images = [
        '../../../../images/works/Tasclear/1.png',
        '../../../../images/works/Tasclear/2.png',
        '../../../../images/works/Tasclear/3.png',
        '../../../../images/works/Tasclear/4.png'
    ];

    const body = "DiscordのVCに参加した時間をタスクを処理した時間とみなして、みんなの頑張りを可視化するDiscordBOTです。\n\n​\n\n週間記録や月間記録が確認できるだけでなく、それらを画像として出力できます。\n\nnext.js単体だと画像出力が難しかったため、Pythonを呼び出して画像生成してもらう形をとっています。\n\n​\n\nまた、週間記録や月間記録を元に目標を設定でき、随時確認できることも特徴です。\n\n更に、記録対象のVCに参加している間は専用ロールが付与されるため、それに応じて導入サーバーで様々なアクションをすることができます。1つのサーバーで加入するとすべてのサーバーでロールが付与されるところが特徴です。"

    return (
        <WorksPage
            title="たすくりあ"
            description={`あなたの頑張りを見える化するDiscordBOTです。\n\nKloudハッカソン#3で発表しました。`}
            icons={
                <div
                    className="w-[50px] flex justify-center  bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[2vw] mx-auto">
                    <Link href="https://github.com/starkoka/Tasclear" target="_blank">
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
                    title="たすくりあ 紹介スライド"
                    url="https://drive.google.com/file/d/1jJh2bJkkwhOlKIGizdUwB2cRSKFYDZu7/preview"
                    description="Kloudハッカソン#3での発表スライドです。"
                />
            }
        />
    );
};

export default Project;