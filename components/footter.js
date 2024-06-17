'use client';

const returnTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

export default function Footer() {
    return (
        <footer className="items-center bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[5vw]">
            <div className="flex justify-center m-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={returnTop}>
                    先頭に戻る
                </button>
            </div>
        </footer>
    );
}