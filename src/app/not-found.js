'use client';
import Header from '../../components/header.js'
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 ">
            <Header />
            <div
                className="h-screen w-full bg-gradient-to-b from-blue-300 via-indigo-300 to-purple-300 flex flex-col items-center justify-center">
                <div
                    className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg flex flex-col">
                    <p className="text-center text-3xl my-16">404 not found</p>
                    <p className="text-center">これは見つからずにふて寝してるきなこ</p>

                    <div className="m-auto">
                        <img src="/images/kinako_futene.jpg" alt="ふて寝してるハムスター"
                             className="flex-grow max-w-40 my-auto object-contain rounded-lg"/>
                    </div>

                    <Link href="/" className="mt-auto mb-5">
                        <p className="text-center text-lg underline">トップページに戻る</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
