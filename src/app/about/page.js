import Link from 'next/link';
import Title from "../../../components/title";
import React from "react";
import Tile from "../../../components/tile";
import SkillCard from "../../../components/skillCard";
import ReactMarkdown from "react-markdown";
import AtcoderTile from "../../../components/atcoderTile";


export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <Title
                    title="about"
                    description="僕kokastarの自己紹介から技術スタックまで"
                />

                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                    <div
                        className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                        <div className="flex items-center justify-center w-full h-28 ">
                            <img src="/images/starkoka.jpeg" alt="kokastarのアイコン"
                                 className="rounded-full w-[min(10vw,10vh)] m-[5vw]"/>
                        </div>
                        <p className="text-center text-[2vw]">kokastar</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                    <Tile
                        title="所属"
                        description={'木更津高専 情報工学科3年\n\nロボット研究同好会/プログラミング研究同好会所属\n\nJapanese Scratch-Wiki 管理者'}
                    />
                    <Tile
                        title="経歴"
                        description={'2006年12月14日生まれ\n\n2022年4月　木更津高専情報工学科入学'}
                    />
                </div>
                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                    <Tile
                        title="受賞歴"
                        description={'Kloudハッカソン#4 優秀賞受賞'}
                    />
                    <Tile
                        title="大会出場暦"
                        description={'高専ロボコン2022/2023出場'}
                    />
                </div>

                <div
                    className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                    <h1 className="text-center text-[2vw]">技術スタック</h1>
                    <div className="text-center text-[1vw]">
                        <p>★:チュートリアル程度 ★★多少の開発経験あり
                            ★★★開発経験が多々あり</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[1vw]">
                    <SkillCard
                        title="node.js / JS"
                        description={'★★★'}
                        iconURL={"https://skillicons.dev/icons?i=nodejs,js&theme=light"}
                    />
                    <SkillCard
                        title="Git / GitHub"
                        description={'★★★'}
                        iconURL={"https://skillicons.dev/icons?i=git,github&theme=light"}
                    />
                    <SkillCard
                        title="Linux"
                        description={'★★★'}
                        iconURL={"https://skillicons.dev/icons?i=linux&theme=light"}
                    />
                    <SkillCard
                        title="discord.js"
                        description={'★★★'}
                        iconURL={"https://skillicons.dev/icons?i=bots&theme=light"}
                    />
                </div>
                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[1vw]">
                    <SkillCard
                        title="C / C++"
                        description={'★★★'}
                        iconURL={"https://skillicons.dev/icons?i=c,cpp&theme=light"}
                    />
                    <SkillCard
                        title="Python"
                        description={'★★'}
                        iconURL={"https://skillicons.dev/icons?i=python&theme=light"}
                    />
                    <SkillCard
                        title="Raspberry Pi"
                        description={'★★'}
                        iconURL={"https://skillicons.dev/icons?i=raspberrypi&theme=light"}
                    />
                    <SkillCard
                        title="Arduino"
                        description={'★★'}
                        iconURL={"https://skillicons.dev/icons?i=arduino&theme=light"}
                    />
                </div>
                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[1vw]">
                    <SkillCard
                        title="Next.js / React"
                        description={'★★'}
                        iconURL={"https://skillicons.dev/icons?i=nextjs,react&theme=light"}
                    />
                    <SkillCard
                        title="Docker"
                        description={'★'}
                        iconURL={"https://skillicons.dev/icons?i=docker&theme=light"}
                    />
                    <SkillCard
                        title="Rust"
                        description={'★'}
                        iconURL={"https://skillicons.dev/icons?i=rust&theme=light"}
                    />
                    <SkillCard
                        title="Prisma"
                        description={'★'}
                        iconURL={"https://skillicons.dev/icons?i=prisma&theme=light"}
                    />
                </div>


                <div
                    className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                    <h1 className="text-center text-[2vw]">その他スキル</h1>
                    <div className="text-center text-[1vw]">
                        <p>技術的なスキルであったり技術スタックの補足</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                    <AtcoderTile
                        title="AtCoder(競プロ)"
                        description={'アルゴリズム/ヒューリスティク共に参加しています。\n\n競プロに取り組む人の中ではそこまで高い方ではないです。\n\n'}
                    />
                    <Tile
                        title="Linux"
                        description={'日常的にArch Linux(i3wm) & Ubuntuを使用しています。\n\nWindowsと別ディスクに入れてのデュアルブート運用です。\n\nGentooは過去インストール経験があります。'}
                    />
                </div>
                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                    <Tile
                        title="データサイエンス"
                        description={'東大松尾研が開催するGCIを修了しています。\n\nそのため、Pythonのデータサイエンスライブラリを多少使えます。'}
                    />
                    <Tile
                        title="金属加工"
                        description={'ボール盤・帯鋸盤・旋盤を多少扱えます。\n\n主にアルミの加工を経験しています。'}
                    />
                </div>
            </div>
        </div>
    );
}
