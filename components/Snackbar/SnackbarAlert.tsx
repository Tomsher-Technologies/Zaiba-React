import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

import { SnackbarAlertProps } from '@/types/common/AlertProps';
import { setMessages } from "@/redux/messagesSlice";
import Button from '../CustomComponents/Button';
import { CheckCircleOutline, CloseOutlined, ErrorOutline } from '@mui/icons-material';

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
                <Alert className='flex justify-start items-center py-2 md:py-5'
                    onClose={handleClose}
                    severity={type} sx={{ width: '100%' }}
                    action={
                        <Button color="inherit" size="small" onClick={handleClose} >
                            <CloseOutlined className='material-symbols-outlined h-[20px] w-[20px] md:h-[24px] md:w-[24px]' />
                        </Button>
                    }
                    iconMapping={{
                        success: <CheckCircleOutline className='h-[20px] w-[20px] md:h-[24px] md:w-[24px]' fontSize="inherit" />,
                        error: <ErrorOutline className='h-[20px] w-[20px] md:h-[24px] md:w-[24px]' fontSize="inherit" />,
                    }}
                >
                    <div className='text-[16px] md:text-[18px]'>{content}</div>
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default SnackbarAlert;
