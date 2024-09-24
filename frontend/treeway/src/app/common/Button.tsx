import styles from './Button.module.scss';

interface ButtonStyleProps {
    content: string
    size: "small" | "medium" | "large"
    colorType: "green" | "blue" | "yellow"
    onClick: () => void
    disabled?: boolean
    type?: "button" | "submit";
};

export default function Button({ content, size, colorType, onClick, disabled, type = "button" } : ButtonStyleProps) {
    return (
        <button
            type={type} 
            className={`${styles.button} ${styles[size]} ${styles[colorType]}`} 
            onClick={onClick} 
            disabled={disabled}>
            {content}
        </button>
    );
}
