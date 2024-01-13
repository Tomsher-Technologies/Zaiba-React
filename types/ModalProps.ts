import { ReactNode } from "react";

export interface ModalProps {
    children: ReactNode;
    title?: any;
    isOpen?: boolean;
    buttons?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading?: boolean;
    onSubmit?: any;
    size?: string;
    modalHeight?:string;
    submitText?: string;
    onSubmitButtons?: boolean;
}