const SectionTitle = ({ title, description }) => {
    return (
        <div className="w-full text-center py-6 md:py-8 mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                <span className="gradient-text">{title}</span>
            </h1>
            {description && (
                <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                    {description}
                </p>
            )}
            <div
                className="w-16 h-1 mx-auto mt-4 rounded-full"
                style={{
                    background: 'linear-gradient(90deg, var(--color-gradient-start), var(--color-gradient-end))',
                }}
            />
        </div>
    );
};

export default SectionTitle;
