
export type LabelProps = {
    text: string;
    htmlFor: string;
}

export type InputProps = {
    id: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export type FormFieldProps = {
    label: string;
    htmlFor: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export type DateInputFieldProps = {
    htmlFor: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}