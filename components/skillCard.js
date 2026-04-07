import TextWithBreaks from "./TextWithBreaks";

const SkillCard = ({ title, description, iconURL }) => {
    return (
        <div className="card p-4 md:p-5 w-full flex flex-col items-center text-center">
            <h3 className="text-sm md:text-base font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                {title}
            </h3>
            {iconURL && (
                <img
                    src={iconURL}
                    alt={title}
                    className="h-10 md:h-12 object-contain mb-2"
                    loading="lazy"
                />
            )}
            <p className="text-xs md:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <TextWithBreaks text={description} />
            </p>
        </div>
    );
};

export default SkillCard;
