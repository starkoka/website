'use client';
import Link from 'next/link'
import {useEffect, useState} from 'react'


const useMediaQuery= (width) => {
    const [targetReached, setTargetReached] = useState(false)

    const updateTarget = () => {
        setTargetReached(window.innerWidth > width)
    }

    useEffect(() => {
        updateTarget()
        window.addEventListener('resize', updateTarget)
        return () => window.removeEventListener('resize', updateTarget)
    }, [])

    return targetReached
}


export default function Header() {
    const isDesktop = useMediaQuery(768);
    const [isOpen, setOpen] = useState(false);
    const handleMenuOpen = () => {
        setOpen(!isOpen);
    };
    const handleMenuClose = () => {
        setOpen(false);
    };
    const head =  isDesktop ? (
        <div className="container mx-auto flex flex-wrapflex-col md:flex-row items-center">
            <h1 className="flex text-xl m-3"><Link href="/">kokastar.dev</Link></h1>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900" href="/">top</a>
                <a className="mr-5 hover:text-gray-900" href="/about">about</a>
                <a className="mr-5 hover:text-gray-900" href="/works">works</a>
            </nav>
        </div>
    ) : (
        <div>
            <div className="container mx-auto flex flex-wrapflex-col md:flex-row items-center">
                <h1 className="z-50 flex text-xl m-3"><Link href="/">kokastar.dev</Link></h1>
                <button className="z-50 space-y-2 md:hidden ml-auto mr-10" onClick={handleMenuOpen}>
                    <span
                        className={
                            isOpen
                                ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
                                : "block w-8 h-0.5 bg-gray-600 duration-300"
                        }
                    />
                    <span
                        className={
                            isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
                        }
                    />
                    <span
                        className={
                            isOpen
                                ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
                                : "block w-8 h-0.5 bg-gray-600 duration-300"
                        }
                    />
                </button>
            </div>
            <div className={
                isOpen
                    ? "h-screen w-full from-blue-300 via-indigo-300 to-purple-300 justify-center container mx-auto flex flex-wrapflex-col md:flex-row items-center"
                    : "container mx-auto flex flex-wrapflex-col md:flex-row items-center"
            }>

                <nav
                    className={
                        isOpen
                            ? "from-blue-300 via-indigo-300 to-purple-300 z-40 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg pt-10"
                            : "fixed right-[-100%] md:right-4"
                    }
                >
                    {
                        isOpen
                        ? (
                            <ul
                                className={
                                    isOpen
                                        ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
                                        : "block md:flex md:gap-8 "
                                }
                            >
                                <li>
                                    <Link onClick={handleMenuClose} href="/">
                                        top
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={handleMenuClose} href="/about">
                                        about
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={handleMenuClose} href="/works">
                                        works
                                    </Link>
                                </li>
                            </ul>
                        ): (
                            <div></div>
                        )
                    }
                </nav>

            </div>
        </div>
    );

    return {
        head: head,
        isDesktop: isDesktop,
        isOpen: isOpen
    }
}
