import React from 'react';
import Link from "next/link";
import WorksPage from "../../../../components/worksPage";
import EmbedMedia from "../../../../components/embedMedia";

const Project = () => {
    const images = [
        '../../../../images/works/Stellarculator/1.png',
        '../../../../images/works/Stellarculator/2.jpg',
        '../../../../images/works/Stellarculator/3.jpg',
        '../../../../images/works/Stellarculator/4.jpg'
    ];

    const body = `学校の自由課題で作成に取り組んだ作品です。\n\n学校の授業課題で[naotiki君(GitHub:naotiki)](https://naotiki.me/)・[NXVZBGBFBEN君(同:NXVZBGBFBEN)](https://nxvzbgbfben.pages.dev/)・[KouRo君(同:Kou-Ro)](https://github.com/Kou-Ro)と2bit加減算機を作成し、それをベースとしました。\n\n​\n\nスイッチを使用する代わりに、フォトトランジスタとLEDから自作したフォトカプラを経由して、ラズベリーパイから加減算機に入力を入れています。\n\nこれにより2進数2桁の計算を行ってくれるので、あとはそれを筆算を行うときのように繰り返し利用して、計算させています。チカチカ光るのはロマンなので、同等の計算量でよりチカチカするような計算順に工夫しています。
    `

    return (
        <WorksPage
            title="Stellarculator"
            description={'ラズパイと2bit加減算機を組み合わせた電卓です。\n\nラズパイにロジックICで自作した2bit加減算機を接続しています。'}
            icons={
                <div
                    className="w-[50px] flex justify-center  bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[2vw] mx-auto">
                    <Link href="https://github.com/starkoka/Stellarculator" target="_blank">
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
                <div>
                    <EmbedMedia
                        title="動作デモ動画①"
                        url="https://drive.google.com/file/d/1dsPoW027ptcQfAE60Z9DFQTDcoIKyGOU/preview"
                        description="2進数2桁同士の足し算のデモです。奥の赤色LEDが計算結果になっています。"
                    />
                    <EmbedMedia
                        title="動作デモ動画②"
                        url="https://drive.google.com/file/d/1-ztQexdaVisB3AX6BuUhXV-75ciBT4rY/preview"
                        description="完成版で実際に2006×1214を計算させてみている動画です。"
                    />
                </div>
            }
        />
    );
};

export default Project;