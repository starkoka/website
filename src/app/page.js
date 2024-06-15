import Header from '../../components/header.js';
import Link from 'next/link';


export default function Home() {
    return (
        <div className="h-screen w-full bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300">
            <Header/>
            <div className="flex flex-col items-center">
                <div
                    className="w-[100vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                    <div className="flex items-center justify-center w-full h-28 mb-[5vw]">
                        <img src="/images/starkoka.jpeg" alt="kokastarのアイコン"
                             className="rounded-full w-[10vw] mt-[5vw]"/>
                    </div>
                    <h1 className="text-center text-[3vw]">I'm kokastar</h1>
                    <div className="flex justify-center mb-[10px]">
                        <a href="https://twitter.com/kokastar_dev">
                            <svg className="w-[30px] mr-0.5" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                <path fill="#5B43F0"
                                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/starkoka">
                            <svg className="w-[30px] ml-0.5" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                <path fill="#5B43F0"
                                      d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div
                    className="w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                    <h1 className="text-center text-[2vw]">README</h1>
                    <div className="ml-[2vw] text-[1vw]">
                        <p>kokastarです。表記はkokastar or こかすた〜です。</p>
                        <p>競技プログラミング・高専ロボコンを中心に色々やってる高専生です。</p>
                        <p>C++/Python/JavaScriptでの開発経験があります。Web系はこのサイトが作れる程度です。</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center mt-[3vw] space-x-[4vw]">
                    <div
                        className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                        <Link href="/about"><h1 className="text-center text-[2vw] underline">about→</h1></Link>
                        <p className="text-center text-[1vw]">もっと詳しい自己紹介</p>
                    </div>
                    <div
                        className="flex-grow bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg items-center justify-center w-[31vw]">
                        <Link href="/works"><h1 className="text-center text-[2vw] underline">works→</h1></Link>
                        <p className="text-center text-[1vw]">過去に作ったもの・取り組んだことの紹介</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
