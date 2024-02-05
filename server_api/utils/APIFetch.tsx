import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Animations from '@/components/Animations';

// const Animations = dynamic(() => import('@/components/Animations'));

interface APIFetchProps {
    children: ReactNode;
    isLoading?: boolean | number | null;
    lengthCheckObject?: {};
    messageContent?: any;
    notLengthCheckObject?: boolean;
    animatedLoading?: string;
}

export const APIFetch: React.FC<APIFetchProps> = ({ children, isLoading = false, animatedLoading = '', lengthCheckObject = {}, notLengthCheckObject = false, messageContent = '' }) => {

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
            <Fragment>
                {animatedLoading !== '' &&
                    <Animations
                        animation={animatedLoading}
                    />
                    ||
                    <div className='flex justify-center my-14 md:my-28'>
                        <Box >
                            <CircularProgress />
                        </Box>
                    </div>
                }
            </Fragment>

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