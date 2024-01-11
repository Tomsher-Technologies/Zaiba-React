import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

import { SnackbarAlertProps } from '@/types/common/AlertProps';
import { setMessages } from "@/redux/messagesSlice";

const SnackbarAlert: FC<SnackbarAlertProps> = ({ content, messagesEnable, setMessagesEnable, type = 'success' }) => {
    const dispatch = useDispatch();

    const vertical = 'top';
    const horizontal = 'right';

    const handleClose = () => {
        dispatch(setMessages({
            messages: '',
            type: '',
            from: ''
        }));
        setMessagesEnable(false);
    };

    return (
        <Box sx={{ width: 500 }}>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={messagesEnable}
                onClose={handleClose}
                message="I love snacks"
                autoHideDuration={6000}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                    <div className='text-[14px]'>{content}</div>
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default SnackbarAlert;
