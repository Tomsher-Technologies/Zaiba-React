import React, { ReactNode, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface APIFetchProps {
    children: ReactNode;
    isLoading?: boolean | number | null;
    lengthCheckObject?: {};
    messageContent?: string;
    notLengthCheckObject?: boolean;
}

export const APIFetch: React.FC<APIFetchProps> = ({ children, isLoading = false, lengthCheckObject = {}, notLengthCheckObject = false, messageContent = '' }) => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, []);


    if ((isClient) && (!isLoading)) {
        if (validateData(lengthCheckObject || '') || notLengthCheckObject) {
            return children ?? <></>
        } else {
            return (
                <>
                    {messageContent !== '' && <div className='flex justify-center my-4 text-error '>{messageContent}</div>}
                </>
            )
        }
    } else {
        return (
            <div className='flex justify-center my-14 md:my-28'>
                <Box >
                    <CircularProgress />
                </Box>
            </div>
        )
    }
};

export const validateData = (
    objectApi: any
) => {
    if ((objectApi) && (objectApi.length > 0)) {
        return true;
    } else {
        false;
    }
}