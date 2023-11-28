import React, { FC, Fragment, useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { Box, Checkbox } from "@mui/material";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

import { SearchLookupMultipleProps, SelectLookupProps } from "@/types/CommonInputTextProps";
import { colors } from "@/constants/colors";


const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

interface SelectLookupOptionsProps {
    label: string;
    text: string;
}


const SearchLookupMultiple: FC<SearchLookupMultipleProps> = ({
    name,
    value,
    selectTitle,
    label = '',
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


    // useEffect(() => {
    //     value !== "" && formik && formik.setFieldValue(name, value);
    // }, [value]);


    return (
        <Box>
            {labelText.trim() != "" && <div className={` mb-2 ${labelClassName}`}>{labelText}{required && <span className='text-red-600'>*</span>}</div>}

            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={options}
                disableCloseOnSelect
                disableClearable={disableClearable}
                getOptionLabel={(option) => option[selectTitle]}
                value={value}
                onChange={onChange}
                // onInputChange={onInputChange}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option[selectTitle]}
                    </li>
                )}


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
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label={label}
                        name={name}
                        className={className}
                        placeholder={placeholder}
                        required={required}
                        error={Boolean(error)}
                        // helperText={error || helperText}
                        InputLabelProps={{
                            style: disabledLabelStyle,
                        }}
                        size={textFieldSize}
                        sx={{
                            "& input::placeholder": {
                                fontSize: "12px"
                            },
                        }}
                    // onClick={() => { alert("dhdh") }}
                    />}
            />
            <>
                {(error || helperText) && <div className='text-error text-xs mt-1'>{error || helperText}</div>}
            </>
        </Box>
    )

}
export default SearchLookupMultiple;

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
];