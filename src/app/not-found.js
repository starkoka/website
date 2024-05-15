'use client';
import Header from './header.js'


export default function Home() {
    const header = Header();
    return (
        <div className="w-full bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 ">
            <nav className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
                {header.head}
            </nav>
            {(header.isOpen ? <div></div>:
                    <div>
                        <div
                            className="h-screen w-full from-blue-300 via-indigo-300 to-purple-300 flex items-center justify-center">
                            <div
                                className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg pt-10 items-center justify-center">
                                <h1 className="text-center font-bold text-4xl">404 not found</h1>
                                <p className="text-center">ここに表示するものは何もない！</p>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    );
}
