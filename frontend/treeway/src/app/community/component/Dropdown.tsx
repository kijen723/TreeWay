import styles from '../page.module.scss'; 

interface DropdownProps {
    label: string;
    value: number | string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: number | string; label: string }[];
}

export default function Dropdown({ label, value, onChange, options }: DropdownProps) {
    return (
        <div className={styles.dropdown}>
            <label htmlFor={label}>{label}</label>
            <select id={label} value={value} onChange={onChange}>
                <option value="">선택하세요</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
