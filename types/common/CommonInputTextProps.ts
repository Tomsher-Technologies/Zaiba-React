// import { Dayjs } from "dayjs";
import { FormikErrors, FormikProps, FormikTouched } from "formik";
import { InputHTMLAttributes } from "react";

export interface CommonInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelText?: string;
    labelClassName?: string;
    value?: string | number | undefined;
    name?: string;
    className?: any;
    type?: string;
    autoFocus?: boolean;
    borderRadius?: string;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    error?: any;
    inputRef?: any;
    helperText?: string | false | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined;
    multiline?: boolean;
    rows?: number;
    maxRows?: number;
    color?: any;
    showIcon?: any;
    placeholderFontSize?: string;
    placeholderFontSizeFontWeight?: string;
    borderColor?: string;
    focusedBorderColor?: string;
    labelColor?: string;
    focusColor?: string;
    bgColor?: string;
    inputWidth?: string,
    textFieldSize?: any;
    endAdornment?: any;
    startAdornment?: any;
    textPadding?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface DatePickerProps {
    labelText?: any;
    label?: any;
    onChange?: any;
    className?: string;
    labelClassName?: string;
    extraClassName?: string;
    disabled?: boolean;
    readOnly?: boolean;
    size?: any;
    error?: any;
    defaultValue?: any;
    helperText?: any;
    disableFuture?: boolean;
    disablePast?: boolean;
    placeholder?: string;
    required?: boolean;
    color?: any;
    borderColor?: string;
    focusedBorderColor?: string;
    labelColor?: string;
    focusColor?: string;
    bgColor?: string;
    enablePast?: any;
}

export interface TimePickerProps {
    labelText?: any;
    label?: any;
    onChange?: any;
    className?: string;
    labelClassName?: string;
    extraClassName?: string;
    disabled?: boolean;
    readOnly?: boolean;
    size?: any;
    error?: any;
    defaultValue?: any;
    helperText?: any;
    disableFuture?: boolean;
    disablePast?: boolean;
    placeholder?: string;
    required?: boolean;
    color?: any;
    borderColor?: string;
    focusedBorderColor?: string;
    labelColor?: string;
    focusColor?: string;
    bgColor?: string;
    enablePast?: any;
}

interface OptionSelectProps {
    value: string;
    label: string;
}

export interface SelectProps {
    label?: string;
    labelText?: string;
    labelClassName?: string;
    name: string;
    value?: string | number | null | undefined;
    options: OptionSelectProps[];
    required?: boolean;
    textFieldSize?: any;
    error?: string | undefined | FormikErrors<any> | string[] | FormikErrors<any>[] | false;
    placeholder?: string;
    borderColor?: string;
    focusedBorderColor?: string;
    hoverBorderColor?: string;
    labelColor?: string;
    focusColor?: string;
    bgColor?: string;
    onChange?: any;
    formik?: FormikProps<any>;
    disabled: boolean;
}

export interface SelectLookupProps {
    label?: string;
    labelText?: string;
    labelClassName?: string;
    name?: any;
    value?: any;
    autoFocus?: boolean;
    className?: string;
    disableClearable?: boolean;
    startAdornments?: any;
    options?: any;
    dropDownWidth?: any;
    required?: boolean;
    textFieldSize?: any;
    error?: any;
    bgColor?: string;
    borderColor?: string;
    focusedBorderColor?: string;
    hoverBorderColor?: string;
    labelColor?: string;
    focusColor?: string;
    helperText?: string;
    disabled?: boolean;
    placeholder?: string;
    onChange?: any;
    formik?: FormikProps<any> | any;
    onInputChange?: any;
}

export interface SearchLookupProps {
    label?: string;
    labelText?: string;
    labelClassName?: string;
    name?: any;
    value?: any;
    setValue?: any;
    className?: string;
    options?: any;
    required?: boolean;
    textFieldSize?: any;
    disableClearable?: boolean;
    startAdornments?: any;
    error?: any;
    helperText?: string;
    disabled?: boolean;
    placeholder?: string;
    displayName?: string;
    borderColor?: string;
    focusedBorderColor?: string;
    hoverBorderColor?: string;
    labelColor?: string;
    focusColor?: string;
    bgColor?: string;
    lookupType?: string;
    onChange?: any;
    formik?: FormikProps<any> | any;
}

export interface SearchLookupMultipleProps {
    label?: string;
    labelText?: string;
    labelClassName?: string;
    name?: any;
    value?: any;
    className?: string;
    disableClearable?: boolean;
    startAdornments?: any;
    options?: any;
    dropDownWidth?: any;
    required?: boolean;
    textFieldSize?: any;
    error?: any;
    bgColor?: string;
    borderColor?: string;
    focusedBorderColor?: string;
    hoverBorderColor?: string;
    labelColor?: string;
    focusColor?: string;
    helperText?: string;
    disabled?: boolean;
    placeholder?: string;
    onChange?: any;
    formik?: FormikProps<any> | any;
    onInputChange?: any;
    selectTitle: string
    // label?: string;
    // labelText?: string;
    // labelClassName?: string;
    // name?: any;
    // value?: any;
    // setValue?: any;
    // className?: string;
    // options?: any;
    // required?: boolean;
    // textFieldSize?: any;
    // disableClearable?: boolean;
    // startAdornments?: any;
    // error?: any;
    // helperText?: string;
    // disabled?: boolean;
    // placeholder?: string;
    // displayName?: string;
    // borderColor?: string;
    // focusedBorderColor?: string;
    // dropDownWidth?: any;
    // hoverBorderColor?: string;
    // labelColor?: string;
    // focusColor?: string;
    // bgColor?: string;
    // lookupType?: string;
    // onChange?: any;
    // formik?: FormikProps<any> | any;
    // onInputChange?: any;
}

export interface InputInfoProps {
    label?: string;
    content?: string;
}

export interface InputTextEditorProps {
    labelText?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isValid?: boolean;
    errorMessage?: any;
}