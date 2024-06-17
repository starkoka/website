import AtCoderTile from '/components/atcoderTile.js';
import ProjectCard from "../../../components/projectCard";
import React from "react";
import Title from '../../../components/title';


export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <Title
                    title="works"
                    description="今までに作ったものや取り組んできたものを紹介しています。"
                />

                <div
                    className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                    <h1 className="text-center text-[2vw]">作品系</h1>
                    <div className="text-center text-[1vw]">
                        <p>個人的に作成したものから、学校の自由課題で取り組んだものまで</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                        <ProjectCard
                            title="Hizk"
                            description={`GPT-4搭載の「意味から変換する」次世代IMEです。\n\nKloudハッカソン#4で優秀賞を受賞しました。`}
                            linkText="詳細はこちら"
                            linkUrl="/works/Hizk"
                        />
                        <ProjectCard
                            title="祗園祭Webサイト2023"
                            description={`木更津高専の文化祭である祗園祭の2023年版Webサイトです。\n\nプログラミング研究同好会のメンバーとして共同開発しました。`}
                            linkText="詳細はこちら"
                            linkUrl="/works/gionsai2023"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                        <ProjectCard
                            title="たすくりあ"
                            description={`あなたの頑張りを見える化するDiscordBOTです。\n\nKloudハッカソン#3で発表しました。`}
                            linkText="詳細はこちら"
                            linkUrl="/works/Tasclear"
                        />
                        <ProjectCard
                            title="木更津高専統合管理BOT"
                            description={`木更津高専生向けDiscordBOTです。\n\n主に非公式の学年サーバー向けに友人と開発しました。`}
                            linkText="詳細はこちら"
                            linkUrl="/works/KMM"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                        <ProjectCard
                            title="Stellarculator"
                            description={`ラズパイと2bit加減算機を組み合わせた電卓です。\n\nラズパイにロジックICで自作した2bit加減算機を接続しています。`}
                            linkText="詳細はこちら"
                            linkUrl="/works/Stellarculator"
                        />
                        <ProjectCard
                            title="高専ロボコンHP更新お知らせbot"
                            description={`高専ロボコンHPが更新された時Discordでお知らせします。\n\nいくつかのロボコン部で導入していただいています。`}
                            linkText="GitHubリポジトリ"
                            linkUrl="https://github.com/starkoka/KosenRBKN-notice-bot"
                        />
                    </div>
                </div>

                <div
                    className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                    <h1 className="text-center text-[2vw]">コンテスト・修了系</h1>
                    <div className="text-center text-[1vw]">
                        <p>参加したコンテストや修了した講座等</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                        <AtCoderTile
                            title={'AtCoder'}
                            description={`競技プログラミングのコンテストサイトです。\n\nABC/AHCを中心に、たまにARCにも出場しています。`}
                        />
                        <ProjectCard
                            title="高専ロボコン"
                            description={`高専ロボコン2022~2024に木更津高専から出場しています。\n\n2022/2023は共にBチームのリーダーでした。\n\n2024年はAチームの制御を担当しています。`}
                            linkText="詳細はこちら"
                            linkUrl="works/KosenRBKN"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                        <ProjectCard
                            title="DIVER OSINT CTF 2024"
                            description={`現実世界指向のOSINT CTFです。\n\n\tUFO_TH_JPのメンバーとして参加して、10位でした。\n\n僕個人としては2問正解しました。`}
                            linkText="チームのWriteUp"
                            linkUrl="https://hackmd.io/@YumaOchi/rJ52sqGH0"
                        />
                        <ProjectCard
                            title="GCI 2023 Winter"
                            description={`東大松尾研が開催するデータサイエンスの講座です。\n\nGCI 2023 Winterを修了しました。`}
                            linkText="GCI公式HP"
                            linkUrl="https://gci2.t.u-tokyo.ac.jp/"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                        <ProjectCard
                            title="AtCoder Junior League 2023"
                            description={`学校別対抗中高生向け競技プログラミングリーグです。\n\n\t木更津高専所属として、高校部門14位でした。\n\n高2部門において個人としては43位でした。`}
                            linkText="AJL2023公式サイト"
                            linkUrl="https://atcoder.jp/contests/ajl2023"
                        />
                        <ProjectCard
                            title="日本情報オリンピック 2023/2024"
                            description={`一次予選は4分で4問全問正解しました。\n\n二次予選は174点で本戦出場権は獲得できませんでした。\n\n二次予選の得点は100-47-23-4-0点でした(ボーダー240点)。`}
                            linkText="JOI2023/2024 二次予選問題"
                            linkUrl="https://atcoder.jp/contests/joi2024yo2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
