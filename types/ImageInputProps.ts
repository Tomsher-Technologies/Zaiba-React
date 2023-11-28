import { ChangeEvent } from 'react';

export interface ImageInputProps {
    label?: string;
    inline?: boolean;
    className?: string;
    name?: string;
    disabled?: boolean;
    onCancel?: any;
    src?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    hintMessage?: string | false;
    errorMessage?: string | false;
    successMessage?: string | false;
}