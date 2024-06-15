import dynamic from 'next/dynamic';
const HeaderClient = dynamic(() => import('./headerClient.js'), { ssr: false });

export default function Header() {
    return (
        <header className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
            <HeaderClient />
        </header>
    );
}