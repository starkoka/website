import dynamic from 'next/dynamic';
import Link from "next/link";

const LoadingComponent = () => <div className="container mx-auto flex flex-wrapflex-col md:flex-row items-center">
    <h1 className="z-50 flex text-xl m-3"><Link href="/">kokastar.dev</Link></h1>
    <button className="z-50 space-y-2 md:hidden ml-auto mr-10">
        <span className="block w-8 h-0.5 bg-gray-600 duration-300"/>
        <span className="block w-8 h-0.5 bg-gray-600 duration-300"/>
        <span className="block w-8 h-0.5 bg-gray-600 duration-300"/>
    </button>
</div>


const HeaderClient = dynamic(() => import('./header/headerClient.js'), {ssr: false, loading: LoadingComponent});
export default function Header() {
    return (
        <header className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
            <HeaderClient/>
        </header>
    );
}