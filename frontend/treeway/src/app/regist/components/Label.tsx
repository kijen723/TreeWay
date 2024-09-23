interface LabelProps {
    text: string;
    htmlFor: string;
}

export default function Label({ text, htmlFor } : LabelProps) {
    return (
        <label htmlFor={htmlFor}>{text}</label>
    );
}