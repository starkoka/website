import React from 'react';
import Link from "next/link";
import WorksPage from "../../../../components/worksPage";

const Project = () => {
    const images = [
        '../../../../images/works/KMM/1.png',
        '../../../../images/works/KMM/2.png',
        '../../../../images/works/KMM/3.png'
    ];

    const body = "[naotiki君(GitHub:naotiki)](https://naotiki.me/)・[NXVZBGBFBEN君(同:NXVZBGBFBEN)](https://nxvzbgbfben.pages.dev/)・[KouRo君(同:Kou-Ro)](https://github.com/Kou-Ro)と機能ごとに分担して開発しています。\n\n僕が担当した主な機能は「時間割機能」「ダッシュボード機能」「天気機能」の3つです。\n\n​\n\n時間割機能は、次の日の時間割を学科チャンネルに送ってくれる他、コマンドで指定した曜日の時間割を確認できます。また授業変更に対応している他、提出物の締め切り等特定の日の授業にコメントをつけることもできます。\n\n更に、時間割閲覧コマンドを実行した時学科学年を指定しなくても、自動でロールやサーバーの情報を元に学年学科を識別する機能があるなど、利便性に気を配った機能となっています。\n\n​\n\nダッシュボード機能は、サーバーの概要や関連情報をすぐに見れる機能です。\n\n次の紹介する天気機能とも連動して天気を表示したり、次のテストまでの日数を表示させたりもしています。\n\n​\n\n天気機能は、気象庁のデータを元にした天気予報を確認できる機能です。毎日夜20時に送ることにより情報が確認できる他、それをきっかけに会話も生まれ、サーバーにとっても良い効果を生み出しています。"

    return (
        <WorksPage
            title="木更津高専統合管理BOT"
            description={`木更津高専生向けDiscordBOTです。\n\n主に非公式の学年サーバー向けに友人と開発しました。`}
            icons={
                <div
                    className="w-[50px] flex justify-center  bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[2vw] mx-auto">
                    <Link href="https://github.com/NITKC-DEV/Kisarazu-Multi-Manager" target="_blank">
                        <svg className="w-[30px] ml-0.5" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path fill="#5B43F0"
                                  d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
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