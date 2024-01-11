import { FC } from 'react';
import { InfoOutlined } from '@mui/icons-material';

import { ContentsDeleteProps } from '@/types/common/AlertProps';
import { DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export const ContentsDelete: FC<ContentsDeleteProps> = ({ contents }) => {


    return (
        <>
            <DialogTitle>{"Are you sure want to delete?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" component={'span'}>
                    <div className="flex items-center justify-center">
                        <InfoOutlined className='text-[50px] lg:text-[75px] text-warning' />
                    </div>
                    <div className="mt-5">
                        Please note that once you delete this {contents}, you won&lsquo;t be able to undo this action.
                    </div>
                    
                </DialogContentText>
            </DialogContent>
        </>
    )
}