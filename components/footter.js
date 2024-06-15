import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[5vw]">
            <p className="text-center m-3"><Link href="/">先頭に戻る</Link></p>
        </footer>
    );
}