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
  isLoadingColor?: string;
  loadingSize?: string;
}

const Button: React.FC<ButtonPropsWithIcons> = ({
  children,
  startIcon,
  endIcon,
  width = '',
  height = '',
  size = "small",
  isLoading = false,
  isLoadingColor = 'text-white ',
  loadingSize = '13px',
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
      style={{ textTransform: 'none' }}
      disabled={isLoading || props.disabled}
    // style={{textTransform: 'none', width: width, height: height}}
    >
      <div className='flex gap-1'>{isLoading && <Loading className={`${isLoadingColor} mr-2 mt-1"  `} size={loadingSize} />}  {children}</div>
    </MuiButton>
  );
};

export default Button;