import Label from "./Label";
import InputField from "./InputField";

interface FormFieldProps {
    label: string;
    htmlFor: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export default function FormField({ label, htmlFor, type, placeholder, value, onChange, disabled } : FormFieldProps) {
    return (
        <div>
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