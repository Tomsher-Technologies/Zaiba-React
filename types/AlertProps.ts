export interface AlertDialogSlideProps {
    nots?: any;
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    contents: any;
    submitText?: string | boolean | undefined;
    cancelText?: string | boolean | undefined;
    onSubmit?: any;
    onCancel?: any;
    onSubmitButton?: boolean;
    onCancelButton?: boolean;
}

export interface ContentsDeleteProps {
    contents: any
}

export interface ErrorAlertProps {
    contents: any
}

export interface SuccessAlertProps {
    contents: any
}