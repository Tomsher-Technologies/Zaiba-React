import React, { FC, Fragment, useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

import { SelectLookupProps } from "@/types/common/CommonInputTextProps";
import { colors } from "@/constants/colors";
import { Box } from "@mui/material";

interface SelectLookupOptionsProps {
    label: string;
    text: string;
}


const SelectLookup: FC<SelectLookupProps> = ({
    name,
    value,
    label = '',
    autoFocus = false,
    labelText = '',
    startAdornments = '',
    labelClassName = '',
    className,
    placeholder,
    disableClearable = false,
    options,
    formik,
    dropDownWidth,
    error,
    bgColor = '#F9FAFB',
    borderColor = '',
    focusedBorderColor = colors.primaryColor,
    hoverBorderColor = '',
    labelColor = colors.primaryColor,
    required = true,
    helperText,
    textFieldSize = "small",
    disabled,
    onChange,
    onInputChange,
}) => {
    const disabledLabelStyle = {
        color: disabled ? '#000000' : '',
    };
    const [open, setOpen] = useState(false);
    const [getOptions, setGetOptions] = useState<readonly SelectLookupOptionsProps[]>([]);

    const loading = open && getOptions.length === 0;

    useEffect(() => {
        value !== "" && formik && formik.setFieldValue(name, value);
    }, [value]);


    return (
        <Box>
            {labelText.trim() != "" && <div className={` mb-2 font-semibold ${labelClassName}`}>{labelText}{required && <span className='text-red-600'>*</span>}</div>}
            <Autocomplete
                disablePortal
                autoFocus={autoFocus}
                disableClearable={disableClearable}
                options={options}
                value={options?.find((item: any) => item.value == value)}
                onChange={onChange}
                // onInputChange={(event: any, newInputValue) => {
                //     console.log(event.target.value);
                //     // onChange(newInputValue);
                // }}
                onInputChange={onInputChange}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                getOptionLabel={(option) => option.text}
                loading={loading}
                componentsProps={{
                    paper: {
                        sx: {
                            width: dropDownWidth,
                            fontSize: 13,
                            margin: 0.5
                        }
                    }
                }}
                sx={{
                    fieldset: { borderColor: borderColor },
                    "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                    },
                    "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                            borderColor: focusedBorderColor
                        },
                        '&:hover fieldset': {
                            borderColor: hoverBorderColor,
                        },
                    },
                    "& label.Mui-focused": {
                        color: labelColor
                    },
                    // '& .MuiInputBase-root.Mui-disabled': {
                    backgroundColor: bgColor ? bgColor : '',
                    // },
                }}
                // sx={{ width: 300 }}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label={label}
                        name={name}
                        className={className}
                        placeholder={placeholder}
                        required={required}
                        error={Boolean(error)}
                        helperText={error || helperText}
                        InputLabelProps={{
                            style: disabledLabelStyle,
                        }}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <Fragment>
                                    {startAdornments ? startAdornments : null}
                                    {params.InputProps.endAdornment}
                                </Fragment>
                            ),
                            endAdornment: (
                                <Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </Fragment>
                            ),

                        }}
                        // classes={
                        //     { input: classes.input }
                        // }
                        sx={{
                            "& input::placeholder": {
                                fontSize: "12px"
                            },
                        }}
                        size={textFieldSize}
                    />}
            />
        </Box>
    )

}
export default SelectLookup;



// import React, { FC, Fragment, useEffect, useState } from "react";
// import Autocomplete from '@mui/material/Autocomplete';
// import CircularProgress from '@mui/material/CircularProgress';
// import TextField from '@mui/material/TextField';

// import { SelectLookupProps } from "@/types/CommonInputTextProps";
// import { colors } from "@/constants/colors";
// import { Box } from "@mui/material";

// interface SelectLookupOptionsProps {
//     label: string;
//     text: string;
// }

// function sleep(delay = 0) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }
// const SelectLookup: FC<SelectLookupProps> = ({
//     name,
//     value,
//     label = '',
//     labelText = '',
//     startAdornments = '',
//     labelClassName = '',
//     className,
//     placeholder,
//     disableClearable = false,
//     options,
//     formik,
//     dropDownWidth,
//     error,
//     bgColor = '',
//     borderColor = '',
//     focusedBorderColor = colors.primaryColor,
//     hoverBorderColor='',
//     labelColor = colors.primaryColor,
//     required = true,
//     helperText,
//     textFieldSize = "small",
//     disabled,
//     onChange,
//     onInputChange,
// }) => {
//     const disabledLabelStyle = {
//         color: disabled ? '#000000' : '',
//     };
//     const [open, setOpen] = useState(false);
//     const [getOptions, setGetOptions] = useState<readonly SelectLookupOptionsProps[]>([]);

//     const loading = open && getOptions.length === 0;

//     useEffect(() => {
//         value !== "" && formik && formik.setFieldValue(name, value);
//     }, [value]);
//     useEffect(() => {
//         let active = true;
//         if (!loading) {
//             return undefined;
//         }
//         (async () => {
//             await sleep(1e3); // For demo purposes.

//             if (active) {
//                 setGetOptions([...options]);
//             }
//         })();

//         return () => {
//             active = false;
//         };
//     }, [loading]);

//     useEffect(() => {
//         if (!open) {
//             setGetOptions([]);
//         }
//     }, [open]);

//     return (
//         <Box>
//             {labelText.trim() != "" && <div className={` mb-2 ${labelClassName}`}>{labelText}{required && <span className='text-red-600'>*</span>}</div>}
//             <Autocomplete
//                 disablePortal
//                 disableClearable={disableClearable}
//                 options={getOptions}
//                 value={options?.find((item: any) => item.value == value)}
//                 onChange={onChange}
//                 // onInputChange={(event: any, newInputValue) => {
//                 //     console.log(event.target.value);
//                 //     // onChange(newInputValue);
//                 // }}
//                 onInputChange={onInputChange}
//                 open={open}
//                 onOpen={() => {
//                     setOpen(true);
//                 }}
//                 onClose={() => {
//                     setOpen(false);
//                 }}
//                 getOptionLabel={(option) => option.text}
//                 loading={loading}
//                 componentsProps={{
//                     paper: {
//                         sx: {
//                             width: dropDownWidth,
//                             fontSize: 13,
//                             margin: 0.5
//                         }
//                     }
//                 }}
//                 sx={{
//                     fieldset: { borderColor: borderColor },
//                     "& .MuiInputBase-input.Mui-disabled": {
//                         WebkitTextFillColor: "#000000",
//                     },
//                     "& .MuiOutlinedInput-root": {
//                         "&.Mui-focused fieldset": {
//                             borderColor: focusedBorderColor
//                         },
//                         '&:hover fieldset': {
//                             borderColor: hoverBorderColor,
//                         },
//                     },
//                     "& label.Mui-focused": {
//                         color: labelColor
//                     },
//                     // '& .MuiInputBase-root.Mui-disabled': {
//                     backgroundColor: bgColor ? bgColor : '',
//                     // },
//                 }}
//                 // sx={{ width: 300 }}
//                 renderInput={(params) =>
//                     <TextField
//                         {...params}
//                         label={label}
//                         name={name}
//                         className={className}
//                         placeholder={placeholder}
//                         required={required}
//                         error={Boolean(error)}
//                         helperText={error || helperText}
//                         InputLabelProps={{
//                             style: disabledLabelStyle,
//                         }}
//                         InputProps={{
//                             ...params.InputProps,
//                             startAdornment: (
//                                 <Fragment>
//                                     {startAdornments ? startAdornments : null}
//                                     {params.InputProps.endAdornment}
//                                 </Fragment>
//                             ),
//                             endAdornment: (
//                                 <Fragment>
//                                     {loading ? <CircularProgress color="inherit" size={20} /> : null}
//                                     {params.InputProps.endAdornment}
//                                 </Fragment>
//                             ),

//                         }}
//                         // classes={
//                         //     { input: classes.input }
//                         // }
//                         sx={{
//                             "& input::placeholder": {
//                                 fontSize: "12px"
//                             },
//                         }}
//                         size={textFieldSize}
//                     />}
//             />
//         </Box>
//     )

// }
// export default SelectLookup;

