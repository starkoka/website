import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ThemeProvider from "../../components/ThemeProvider";
import profile from "../data/profile.json";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata = {
  title: "kokastar.dev",
  description: `${profile.displayName}の制作物と活動記録。`,
  openGraph: {
    title: "kokastar.dev",
    description: `${profile.displayName}の制作物と活動記録。`,
    url: "https://kokastar.dev",
    siteName: "kokastar.dev",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#920809"
        />
        <meta name="msapplication-TileColor" content="#920809" />
        <meta name="theme-color" content="#F6F2F1" />
        {/* Prevent FOUC by setting theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme !== 'light' && theme !== 'dark') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#140B0C' : '#F6F2F1');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="font-sans antialiased min-h-screen flex flex-col"
        style={{ background: "var(--color-bg-primary)" }}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">本文へ移動</a>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
