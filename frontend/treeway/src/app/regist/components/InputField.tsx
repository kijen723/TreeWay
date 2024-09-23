interface InputProps {
    id: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export default function InputField({ id, type, placeholder, value, onChange, disabled = false } : InputProps) {
    return (
        <input 
            id={id} 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            disabled={disabled}
        />
    );
}