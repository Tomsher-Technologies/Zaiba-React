import React, { FC } from 'react'
import { DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

import { SuccessAlertProps } from '@/types/AlertProps';

const Success: FC<SuccessAlertProps> = ({ contents }) => {
    return (
        <>
            <DialogTitle>{"Submission successful"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" component={'span'}>
                    <div className="flex items-center justify-center">
                        <CheckCircleOutlineOutlined className='text-[50px] lg:text-[75px] text-success' />
                    </div>
                    <div className="mt-5 text-center">
                        {contents}
                    </div>
                    {/* <div className="mt-1 text-center">
                        Please try again
                    </div> */}
                </DialogContentText>
            </DialogContent>
        </>
    )
}

export default Success