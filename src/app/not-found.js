import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="card p-8 md:p-12 max-w-md w-full text-center">
                <div className="text-6xl md:text-7xl font-bold gradient-text mb-4">404</div>
                <h1 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    Page Not Found
                </h1>
                <p className="text-sm md:text-base mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                    お探しのページは見つかりませんでした
                </p>
                <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                    これは見つからずにふて寝してるきなこ
                </p>
                <div className="mb-6">
                    <img
                        src="/images/kinako_futene.jpg"
                        alt="ふて寝してるハムスター"
                        className="max-w-48 mx-auto rounded-xl object-contain"
                    />
                </div>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                    style={{ background: 'var(--color-accent)' }}
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    トップページに戻る
                </Link>
            </div>
        </div>
    );
}
