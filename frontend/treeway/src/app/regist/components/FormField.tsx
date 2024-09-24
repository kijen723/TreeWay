import styles from '../page.module.scss';
import Label from "./Label";
import InputField from "./InputField";
import { FormFieldProps } from '@/types/RegistPropsTypes';

export default function FormField({ label, htmlFor, type, placeholder, value, onChange, disabled } : FormFieldProps) {
    return (
        <div className={styles.formField}>
            <Label text={label} htmlFor={htmlFor}/>
            <InputField
                id={htmlFor}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
}