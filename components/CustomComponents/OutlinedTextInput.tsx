
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CommonInputTextProps } from '@/types/common/CommonInputTextProps';
import { colors } from '@/constants/colors';
import { FormControl, OutlinedInput } from '@mui/material';


const OutlinedTextInput: React.FC<CommonInputTextProps> = (props) => {
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

    const disabledLabelStyle = {
        color: disabled ? '#00000055' : '',
    };


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
                    <FormControl variant="outlined" fullWidth>
                        <OutlinedInput
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
                            error={Boolean(error)}
                            // helperText={error || helperText}
                            endAdornment={
                                <div className="flex items-center justify-center ">{endAdornment}</div>
                            }
                            startAdornment={startAdornment}
                            // style={{
                            //     borderRadius: borderRadius,
                            //     overflow: "hidden",
                            //     textAlign: 'left',
                            //     padding: textPadding,
                            //     fontSize: placeholderFontSize,
                            // }}
                            readOnly={readOnly}
                            inputProps={{
                                min: "0", max: "10", step: "1",
                                style: {
                                    textAlign: 'left', // Center-align placeholder
                                    fontSize: placeholderFontSize,
                                    // fontWeight: 'bold'
                                },
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
                                borderRadius: '16px', // Adjust the value as needed
                                overflow: 'hidden',
                                padding: textPadding
                                // },
                            }}
                            className={`bg-gray-50 ${className}`}
                            size={!rows ? textFieldSize : "small"}
                        />
                    </FormControl>
                    {(error || helperText) && <div className='text-error text-[13px] mt-2 pl-[20px]'>{error || helperText}</div>}
                </div>
            </Box>
        </>
    )
}

export default OutlinedTextInput;