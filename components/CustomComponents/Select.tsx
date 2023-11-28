import { FormControl, InputLabel, MenuItem, Select as MuiSelect, FormHelperText, SxProps } from '@mui/material';
import { getIn } from 'formik';

import { SelectProps } from '@/types/CommonInputTextProps';
import { colors } from '@/constants/colors';


const Select: React.FC<SelectProps> = ({
    name,
    value,
    label,
    labelText = '',
    labelClassName = '',
    placeholder,
    options,
    error,
    required = true,
    textFieldSize = "small",
    bgColor = '#F9FAFB',
    borderColor = '',
    focusedBorderColor = colors.primaryColor,
    hoverBorderColor = '',
    labelColor = colors.primaryColor,
    onChange,
    formik
}) => {
    const field = formik?.getFieldProps(name);
    const fieldError = getIn(formik?.errors, name);
    const fieldTouched = getIn(formik?.touched, name);

    return (
        <FormControl fullWidth variant="outlined" size={textFieldSize} error={fieldError && fieldTouched}>
            {labelText.trim() != "" && <div className={`mb-2 text-black ${required ? " *" : ""} ${labelClassName}`}>{labelText}{required && <span className='text-error'>*</span>}</div>}
            {/* <InputLabel>{`${label} ${required ? " *" : ""}`}</InputLabel> */}
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                sx={{
                    fieldset: { borderColor: borderColor },

                    "& label.Mui-focused": {
                        color: labelColor
                    },
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: borderColor,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: hoverBorderColor,
                        // borderWidth: "thin",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: focusedBorderColor,
                        // borderWidth: "thin",
                    },
                    '& .MuiSelect-select .notranslate::after': placeholder
                        ? {
                            content: `"${placeholder}"`,
                            opacity: 0.42,
                            fontSize: 12
                        }
                        : {},
                    // '& .MuiInputBase-root.Mui-disabled': {
                    backgroundColor: bgColor ? bgColor : '',
                    // },

                }}

            >
                {placeholder && (
                    <MenuItem value="">
                        <em>{placeholder}</em>
                    </MenuItem>
                )}
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </MuiSelect>
            {fieldError && fieldTouched && <span className='text-error text-[13px] mt-1'>{fieldError}</span>}
            {/* <FormHelperText>{error}</FormHelperText> */}
        </FormControl>

    );
};

export default Select;
