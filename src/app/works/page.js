import Header from '/components/header.js';
import AtCoderTile from '/components/atcoderTile.js';
import Link from 'next/link';


export default function Home() {
    return (
        <div className="h-screen w-full bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300">
            <Header/>
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
                    <h1 className="text-center text-[2vw]">コンテスト・修了系</h1>
                    <div className="text-center text-[1vw]">
                        <p>参加したコンテストや修了した講座等</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                    <AtCoderTile/>
                    <div
                        className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                        <Link href="/works"><h1 className="text-center text-[1.5vw]">AtCoder H</h1></Link>
                        <p className="text-center text-[1vw]">過去の実績
                            の紹介</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
