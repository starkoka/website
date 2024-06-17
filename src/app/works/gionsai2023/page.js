import React from 'react';
import Link from "next/link";
import WorksPage from "../../../../components/worksPage";

const Project = () => {
    const images = [];

    const body = "プログラミング研究同好会で学校のためになるものを作ろう　ということで祗園祭実行委員会と協力してnext.jsとPrisma&PostgreSQLを使って実装しました。\n\n僕は、企画からのお知らせ機能を中心としたAPI周りを担当しました。\n\nこの経験が今このサイトの構築にも役立っています。"

    return (
        <WorksPage
            title="祗園祭Webサイト2023"
            description={'木更津高専の文化祭である祗園祭の2023年版Webサイトです。\n\nプログラミング研究同好会のメンバーとして共同開発しました。'}
            icons={
                <div
                    className="w-[50px] flex justify-center  bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[2vw] mx-auto">
                    <Link href="https://gionsai.jp/" target="_blank">
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