import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kokastar.dev",
  description: "kokastarのHPです",
};

export default function RootLayout({ children }) {
  return (
      <>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          <html lang="ja">
            <body className={inter.className}>
                <div className="h-full w-full bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 flex flex-col min-h-screen">
                    <Header/>
                    <main className="flex-grow">{children}</main>
                    <Footer/>
                </div>
            </body>
          </html>
      </>
  );
}