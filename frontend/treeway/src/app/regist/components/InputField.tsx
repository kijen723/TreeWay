import { InputProps } from '@/types/RegistPropsTypes';

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