
import Box from '@mui/material/Box';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';

import { CommonInputTextProps } from '@/types/common/CommonInputTextProps';
import { colors } from '@/constants/colors';


const InputText: React.FC<CommonInputTextProps> = (props) => {
    const {
        label,
        labelText = '',
        labelClassName = '',
        value,
        name,
        className = '',
        type = "text",
        placeholder,
        autoComplete = "off",
        borderRadius = "",
        autoFocus = false,
        required = true,
        disabled = false,
        readOnly = false,
        error,
        inputRef = '',
        helperText = '',
        multiline = false,
        rows,
        maxRows,
        bgColor = 'primary',
        color = "primary",
        borderColor = "",
        focusedBorderColor = colors.primaryColor,
        labelColor = colors.primaryColor,
        placeholderFontSize = '14px',
        inputWidth = '37ch',
        textFieldSize = "small",
        endAdornment = false,
        startAdornment = false,
        textPadding = '',
        onChange = (e: any) => { },
        onKeyPress = (e: any) => { },
    } = props;

    const ref = useRef<any>(null);

    const disabledLabelStyle = {
        color: disabled ? '#00000055' : '',
    };

    // const defaultOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(`onChange`,e.target.value)
    //     onChange?.(e.target.value || value || '');
    // };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (onKeyPress) {
            onKeyPress(e);
            if (e.key === 'Enter') {
                e.preventDefault(); //
                const form = e.currentTarget.form;
                if (form) {
                    const inputs = form.elements;
                    const index = Array.from(inputs).indexOf(e.currentTarget);
                    if (index !== -1 && index < inputs.length - 1) {
                        const nextInput = inputs[index + 1] as HTMLInputElement;
                        nextInput.focus();
                        // e.preventDefault();
                    }
                }
            }
        }
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { mb: 1 },
                }}
                // sx={{
                //     '& > :not(style)': { mb: 1, width: inputWidth },
                // }}
                noValidate
                autoComplete={autoComplete}
            >
                <div className='mb-4'>
                    {labelText.trim() != "" && <div className={`mb-2 text-textPrimary ${labelClassName}`}>{labelText}{required && <span className='text-red-600'>*</span>}</div>}
                    <TextField
                        // id="outlined-basic"
                        name={name}
                        label={label}
                        type={type}
                        placeholder={placeholder}
                        defaultValue={value}
                        // value={value}
                        required={required}
                        disabled={disabled}
                        autoFocus={autoFocus}
                        inputRef={input => inputRef || input && autoFocus && input.focus()}
                        variant="outlined"
                        error={Boolean(error)}
                        // helperText={error || helperText}
                        InputProps={{
                            readOnly: readOnly,
                            endAdornment: (
                                <div className="flex items-center justify-center ">{endAdornment}</div>
                            ),
                            startAdornment: startAdornment,
                            style: {
                                borderRadius: borderRadius,
                                overflow: "hidden",
                                textAlign: 'left',
                                padding: textPadding,
                                fontSize: placeholderFontSize,
                            },
                            inputProps: {
                                min: "0", max: "10", step: "1",
                                style: {
                                    textAlign: 'left', // Center-align placeholder
                                    fontSize: placeholderFontSize,
                                    // fontWeight: 'bold'
                                },
                            }
                            // startAdornment: type === 'password' && (
                            //     <InputAdornment position="start">
                            //       <IconButton onClick={togglePasswordVisibility}>
                            //         {showPassword ? <VisibilityOff /> : <Visibility />}
                            //       </IconButton>
                            //     </InputAdornment>
                            //   ),
                        }}
                        multiline={multiline}
                        rows={rows}
                        maxRows={maxRows}
                        // onChange={defaultOnChange}
                        onChange={onChange}
                        onKeyPress={handleKeyPress}
                        color={color}
                        sx={{
                            fieldset: { borderColor: borderColor ?? 'primary', backgroundColor: bgColor, overflow: "hidden", },
                            "& .MuiInputBase-input.Mui-disabled": {
                                WebkitTextFillColor: "green",
                            },
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: focusedBorderColor
                                }
                            },
                            "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder": {
                                color: "black",
                                fontWeight: '600'
                            },
                            "& label.Mui-focused": {
                                color: labelColor
                            },
                            '& .MuiFormLabel-root': {
                                fontSize: '0.8rem',
                            },

                            // '& .MuiInputBase-root.Mui-disabled': {
                            backgroundColor: bgColor ? bgColor : '',
                            // },
                        }}
                        InputLabelProps={{
                            style: disabledLabelStyle,
                        }}
                        className={`bg-gray-50 ${className}`}
                        size={!rows ? textFieldSize : "small"}
                    />
                    {(error || helperText) && <div className='text-error text-[13px] mt-1'>{error || helperText}</div>}
                </div>
            </Box>
        </>
    )
}

export default InputText;