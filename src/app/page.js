
export default function Home() {
  return (
      <div className="h-screen w-full bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300">
          <nav className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
              <h1 className="text-xl m-3">kokastar.dev</h1>
          </nav>
          <dib className="flex items-center justify-center w-100 h-28 m-28">
              <img src="/starkoka.jpeg" alt="kokastarのアイコン" className="items-center rounded-full w-1/6 m-0.5" />
          </dib>
          <h1 className="text-center text-[60px]">I'm kokastar</h1>
          <div className="h-screen w-full from-blue-300 via-indigo-300 to-purple-300 flex items-center justify-center">
              <div
                  className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg pt-10">
                  <p className="text-center">TailWind-CSS完全に理解した</p>
              </div>
          </div>
      </div>
  );
}
