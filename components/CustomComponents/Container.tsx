import React, { ReactNode, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
interface ContainerProps {
  children: ReactNode;
  isLoading?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, isLoading = false }) => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, []);

  return (
    <>
      {(isClient) && (!isLoading) &&
        <div className=''>
              {children}
        </div>
        ||
        <div className='flex justify-center my-14 md:my-28'>
          <Box >
            <CircularProgress />
          </Box>
        </div>
      }
    </>
  );
};

export default Container;