import React, { FC } from 'react';
import { DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

import { ErrorAlertProps } from '@/types/common/AlertProps';

const Error: FC<ErrorAlertProps> = ({ contents }) => {
  return (
    <>
      <DialogTitle>{"Something went wrong!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description" component={'span'}>
          <div className="flex items-center justify-center">
            <InfoOutlined className='text-[50px] lg:text-[75px] text-error' />
          </div>
          <div className="mt-5 text-center">
            {contents}
          </div>
          <div className="mt-1 text-center">
            Please try again
          </div>
        </DialogContentText>
      </DialogContent>
    </>
  )
}

export default Error;