import { ReactNode } from 'react';
import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import Loading from './Loading';

interface ButtonPropsWithIcons extends ButtonProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  width?: number;
  height?: number;
  size?: any;
  isLoading?: boolean;
}

const Button: React.FC<ButtonPropsWithIcons> = ({
  children,
  startIcon,
  endIcon,
  width = '',
  height = '',
  size = "small",
  isLoading = false,
  ...props
}) => {
  return (
    <MuiButton
      {...props}
      className={`!flex !items-center !justify-center ${props.className}`}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      // sx={{ width: 300, padding: 1, margin: 2 }}
      style={{ textTransform: 'none', borderRadius: 50 }}
      disabled={isLoading || props.disabled}
    // style={{textTransform: 'none', width: width, height: height}}
    >
      {isLoading && <Loading className="text-white mr-2 mt-1" size="15px" />}  {children}
    </MuiButton>
  );
};

export default Button;