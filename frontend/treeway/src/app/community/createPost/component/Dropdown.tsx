import styles from '../page.module.scss';

interface DropdownProps {
    label: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: number, label: string }[];
}

export default function Dropdown({ label, value, onChange, options }: DropdownProps) {
    return (
        <div className={styles.dropdown}>
            <label>{label}</label>
            <select value={value} onChange={onChange}>
                <option value="0">선택하세요</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
