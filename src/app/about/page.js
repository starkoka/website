import Header from '/components/header.js';
import Link from 'next/link';


export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div
                    className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                    <h1 className="text-center text-[3vw]">about</h1>
                    <div className="text-center text-[1vw]">
                        <p>今までに作ったものや取り組んできたものを紹介しています。</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                    <div
                        className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                        <Link href="/about"><h1 className="text-center text-[2vw] underline">about→</h1></Link>
                        <p className="text-center text-[1vw]">詳しい自己紹介</p>
                    </div>
                    <div
                        className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                        <Link href="/works"><h1 className="text-center text-[2vw] underline">works→</h1></Link>
                        <p className="text-center text-[1vw]">過去の実績
                            の紹介</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
