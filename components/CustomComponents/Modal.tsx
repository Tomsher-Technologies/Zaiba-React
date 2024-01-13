import React, { FC, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Button from '@/components/CustomComponents/Button';

import { ModalProps } from '@/types/ModalProps';

const TransitionsModal: FC<ModalProps> = ({
    children,
    title,
    isOpen = false,
    buttons = false,
    onSubmitButtons = true,
    setIsOpen = () => { },
    isLoading = false,
    onSubmit = () => { },
    size = '90%',
    modalHeight='65%',
    submitText = 'Submit'
}) => {
    const [styleTag, setStyleTag] = useState<HTMLStyleElement | null>(null);
    const [modalWidth, setModalWidth] = useState<string>(size);

    useEffect(() => {
        pageScrolling();
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pageScrolling = () => {
        const newStyleTag = document.createElement('style');
        newStyleTag.type = 'text/css';
        newStyleTag.appendChild(document.createTextNode(styles));
        document.head.appendChild(newStyleTag);
        setStyleTag(newStyleTag);
    };

    const handleResize = () => {
        // Adjust modal width based on screen size
        const screenWidth = window.innerWidth;
        // if (screenWidth < 768) {
        //     setModalWidth('90%'); // On small screens, set width to 90%
        // } else {
        //     setModalWidth('2000%'); // On larger screens, set width to 60%
        // }
    };

    const handleClose = () => setIsOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: modalWidth, // Use dynamic width
        height: modalHeight,
        maxWidth: '1000px', // You can adjust the maximum width as needed
        bgcolor: '#FFFFFF',
        borderRadius: 2,
        boxShadow: 24,
        p: 1,
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={isOpen}>
                    <Box sx={style}>
                        {title && (
                            <div className="text-[22px] font-semibold text-gray-700 text-center mb-5">
                                {title}
                            </div>
                        )}

                        <div className="scrollable-content">{children}</div>

                        {buttons && (
                            <div className="flex justify-center gap-2 m-4 ">
                                <Button
                                    className="btn border-[#2D2D2D] border bg-gray-200 text-[#2D2D2D] hover:shadow-md py-[10px] text-[15px] px-8 rounded-full "
                                    // className='btn rounded-md  border-primary text-primary md:ms-2 w-full md:w-auto hover:shadow-md hover:border-primary'
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                                {onSubmitButtons &&
                                    <Button
                                        className="!bg-primary text-white py-[10px] text-[15px] px-8 rounded-md"
                                        isLoading={isLoading}
                                        onClick={onSubmit}
                                    >
                                        {submitText}
                                    </Button>
                                }
                                {/* <Button
                        type="submit"
                        className='border-primary hover:border-primaryhover bg-white text-primary py-[10px] text-[15 px] px-8 rounded-full '
                        onClick={() => setProductEditModalOpen(true)}
                        variant="outlined"
                    >
                        Create Job Post
                    </Button> */}
                            </div>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default TransitionsModal;

const styles = `
 .scrollable-content {
  max-height: 800px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; /* Hide scrollbar */
 }
 
 .scrollable-content::-webkit-scrollbar {
  width: 5px;
 }
 
 .scrollable-content::-webkit-scrollbar-thumb {
  background-color: transparent; /* Hide scrollbar thumb */
 }
`;
