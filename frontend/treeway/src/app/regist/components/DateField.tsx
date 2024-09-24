import styles from '../page.module.scss'
import Label from "./Label";

interface DateInputFieldProps {
    htmlFor: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DateField({ htmlFor, label, value, onChange } : DateInputFieldProps ) {
    return (
        <div className={styles.dateField}>
            <Label text="생년월일" htmlFor={htmlFor}/>
            <input
                id={htmlFor}
                type="date"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}