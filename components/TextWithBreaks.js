/**
 * Renders text with \n as line breaks.
 * Use this for JSON string values that contain \n for newlines.
 */
export default function TextWithBreaks({ text, className, style }) {
    if (!text) return null;

    const lines = text.split('\n');

    return (
        <span className={className} style={style}>
            {lines.map((line, i) => (
                <span key={i}>
                    {line}
                    {i < lines.length - 1 && <br />}
                </span>
            ))}
        </span>
    );
}
