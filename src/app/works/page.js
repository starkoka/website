import AtCoderTile from '/components/atcoderTile.js';
import Link from 'next/link';


export default function Home() {
    return (
        <div className="h-full w-full bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300">
            <div className="flex flex-col items-center">
                <div
                    className="w-[100vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                    <h1 className="text-center text-[3vw]">works</h1>
                    <div className="text-center text-[1vw]">
                        <p>今までに作ったものや取り組んできたものを紹介しています。</p>
                    </div>
                </div>

                <div
                    className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                    <h1 className="text-center text-[2vw]">作品系</h1>
                    <div className="text-center text-[1vw]">
                        <p>個人的に作成したものから、学校の自由課題で取り組んだものまで</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                        <div
                            className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                            <Link href="/works"><h1 className="text-center text-[1.5vw]">Hizk</h1></Link>
                            <div className="text-center text-[1vw]">
                                <p>東大松尾研が開催するデータサイエンスの講座です。</p>
                                <p>GCI 2023 Winterを修了しました。</p>
                                <Link href="https://gci2.t.u-tokyo.ac.jp/" target="_blank"><p
                                    className="mt-[2vw] underline">GCI公式HP</p></Link>
                            </div>
                        </div>
                        <div
                            className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                            <Link href="/works"><h1 className="text-center text-[1.5vw]">Tasclear</h1></Link>
                            <div className="text-center text-[1vw]">
                                <p>東大松尾研が開催するデータサイエンスの講座です。</p>
                                <p>GCI 2023 Winterを修了しました。</p>
                                <Link href="https://gci2.t.u-tokyo.ac.jp/" target="_blank"><p
                                    className="mt-[2vw] underline">GCI公式HP</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                        <div
                            className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                            <Link href="/works"><h1 className="text-center text-[1.5vw]">Stellarculator</h1></Link>
                            <div className="text-center text-[1vw]">
                                <p>東大松尾研が開催するデータサイエンスの講座です。</p>
                                <p>GCI 2023 Winterを修了しました。</p>
                                <Link href="https://gci2.t.u-tokyo.ac.jp/" target="_blank"><p
                                    className="mt-[2vw] underline">GCI公式HP</p></Link>
                            </div>
                        </div>
                        <div
                            className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                            <Link href="/works"><h1
                                className="text-center text-[1.5vw]">高専ロボコンHP更新お知らせbot</h1></Link>
                            <div className="text-center text-[1vw]">
                                <p>東大松尾研が開催するデータサイエンスの講座です。</p>
                                <p>GCI 2023 Winterを修了しました。</p>
                                <Link href="https://gci2.t.u-tokyo.ac.jp/" target="_blank"><p
                                    className="mt-[2vw] underline">GCI公式HP</p></Link>
                            </div>
                        </div>
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
                        <AtCoderTile/>
                        <div
                            className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                            <Link href="/works"><h1 className="text-center text-[1.5vw]">GCI 2023 Winter</h1></Link>
                            <div className="text-center text-[1vw]">
                                <p>東大松尾研が開催するデータサイエンスの講座です。</p>
                                <p>GCI 2023 Winterを修了しました。</p>
                                <Link href="https://gci2.t.u-tokyo.ac.jp/" target="_blank"><p
                                    className="mt-[2vw] underline">GCI公式HP</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
