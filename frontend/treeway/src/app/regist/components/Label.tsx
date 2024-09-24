import { LabelProps } from '@/types/RegistPropsTypes';

export default function Label({ text, htmlFor } : LabelProps) {
    return (
        <label htmlFor={htmlFor}>{text}</label>
    );
}