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
                                className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg pt-10">
                                <p className="text-center">404 not found</p>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    );
}
