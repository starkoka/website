const SectionTitle = ({ title, description }) => {
    return (
        <div className="mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="solid-heading">{title}</span>
            </h1>
            {description && (
                <p className="text-sm md:text-base max-w-2xl mt-3" style={{ color: 'var(--color-text-secondary)' }}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
