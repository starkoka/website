'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react'


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


export default function Home() {
  const isDesktop = useMediaQuery(768);
  const header = isDesktop ? (
      <div className="container mx-auto flex flex-wrapflex-col md:flex-row items-center">
          <h1 className="flex text-xl m-3"><Link href="/">kokastar.dev</Link></h1>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900">First Link</a>
              <a className="mr-5 hover:text-gray-900">Second Link</a>
              <a className="mr-5 hover:text-gray-900">Third Link</a>
              <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
      </div>
  ): (
      <div className="container mx-auto flex flex-wrapflex-col md:flex-row items-center">
          <h1 className="flex text-xl m-3"><Link href="/">dev.kokastar</Link></h1>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900">First Link</a>
              <a className="mr-5 hover:text-gray-900">Second Link</a>
              <a className="mr-5 hover:text-gray-900">Third Link</a>
              <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
      </div>
  )

  return (
      <div className="w-full bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 ">
          <nav className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
              {header}
          </nav>
          <div
              className="item-center w-full from-blue-300 via-indigo-300 to-purple-300 flex items-center justify-center">
              <div
                  className="h-auto w-[66vw] bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg mt-[3vw]">
                  <dib className="flex items-center justify-center w-100 h-28 mb-[5vw]">
                      <img src="/images/starkoka.jpeg" alt="kokastarのアイコン"
                           className="items-center rounded-full w-[10vw] mt-[5vw]"/>
                  </dib>
                  <h1 className="text-center text-[3vw]">I'm kokastar</h1>
                  <div className="flex justify-center MuiStack-root css-1t62lt9 mb-[10px]">
                      <a href="https://twitter.com/kokastar_dev">
                          <svg className="w-[30px] mr-0.5" focusable="false"
                               aria-hidden="true" viewBox="0 0 24 24">
                              <path
                                  fill="#5B43F0"
                                  d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z">

                              </path>
                          </svg>
                      </a>
                      <a href="https://github.com/starkoka">
                          <svg className="w-[30px] ml-0.5" focusable="false"
                               aria-hidden="true" viewBox="0 0 24 24">
                              <path
                                  fill="#5B43F0"
                                  d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27">
                              </path>
                          </svg>
                      </a>
                  </div>
              </div>

          </div>
          <div className="h-screen w-full from-blue-300 via-indigo-300 to-purple-300 flex items-center justify-center">
              <div
                  className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg pt-10">
                  <p className="text-center">TailWind-CSS完全に理解した</p>
              </div>
          </div>
      </div>
  );
}
