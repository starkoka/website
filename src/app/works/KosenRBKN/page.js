import React from 'react';
import Link from "next/link";
import WorksPage from "../../../../components/worksPage";

const Project = () => {
    const images = [
        '../../../../images/works/KosenRBKN/1.png',
        '../../../../images/works/KosenRBKN/2.png',
        '../../../../images/works/KosenRBKN/3.png',
        '../../../../images/works/KosenRBKN/4.png',
        '../../../../images/works/KosenRBKN/5.png',
        '../../../../images/works/KosenRBKN/6.png',
        '../../../../images/works/KosenRBKN/7.png'
    ];

    const body = "ロボット研究同好会の一員として、2022年〜高専ロボコンに出場しています。\n\n​\n\n2022年はBチーム「フライト兄弟」リーダーとして、2023年はBチーム「TAKE採物語」リーダーとしてそれぞれ出場しました。\n\nしかし、結果は振るわず、木更津高専は9年間全国大会に出場できていません。\n\n​\n\n今年度はAチームのマネージャーとしてAチーム全体を見つつ、A/B両方の制御を担当することになっています。\n\n大会でより良い成績を残すために努力を続けていくつもりです。"

    return (
        <WorksPage
            title="高専ロボコン"
            description={`高専ロボコン2022~2024に木更津高専から出場しています。\n\n2022/2023は共にBチームのリーダーでした。\n\n2024年はAチームの制御を担当しています。`}
            icons={
                <div
                    className="w-[50px] flex justify-center  bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[2vw] mx-auto">
                    <Link href="https://official-robocon.com/kosen/" target="_blank">
                        <svg className="w-[30px] ml-0.5" viewBox="0 -960 960 960" width="24px"
                             fill="#5B43F0">
                            <path
                                d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/>
                        </svg>
                    </Link>
                </div>
            }
            body={body}
            images={images}
        />
    );
};

export default Project;