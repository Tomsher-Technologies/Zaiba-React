import { FC } from "react";
import { CloseFullscreen } from "@mui/icons-material";
import { Backdrop, Box, Modal } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import { screenHeight, screenWidth } from "@/utiles/constArraysAndVariables";
import { ImagePreviewProps } from "@/types/ProductsProps";

const ImagePreviewModal: FC<ImagePreviewProps> = ({ imagePath, isFullScreen, setIsFullScreen }) => {
    const isSmallScreen = useMediaQuery('(max-width:764px)');
    const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isLargeScreen = useMediaQuery('(min-width:961px)');

    const style = {
        position: 'absolute' as 'absolute',
        // top: isSmallScreen ? '40%' : (isMediumScreen ? '25%' : (isLargeScreen ? '23%' : '0%')),
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: isSmallScreen ? '90%' : (isMediumScreen ? '90%' : (isLargeScreen ? '70%' : '50%')), // Use dynamic width
        // height: isSmallScreen ? '50%' : (isLargeScreen ? '30%' : '100%'),
        // height: "100%",
        // maxWidth: '1000px', // You can adjust the maximum width as needed
        borderRadius: 2,
        padding: 20,
        boxShadow: 24,
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isFullScreen}
            onClose={() => setIsFullScreen(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Box className="top-[450px] md:top-[500px] lg:top-[480px] w-full h-[75%] md:h-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]" sx={style}>

                <div className='relative bg-white flex justify-center h-screen'>
                    <div className="absolute right-0 p-[20px] "><CloseFullscreen className='text-textPrimary hover:text-error/70 w-[45px] h-[45px] cursor-pointer' onClick={() => setIsFullScreen(false)} /></div>
                    <img
                        src={imagePath} alt="media" />
                </div>
            </Box>

        </Modal>
    )
}

export default ImagePreviewModal;