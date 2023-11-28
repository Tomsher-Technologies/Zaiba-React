import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import Button from './Button';

import { AlertDialogSlideProps } from '@/types/AlertProps';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide: React.FC<AlertDialogSlideProps> = ({
  isOpen = false,
  setIsOpen = () => { },
  contents,
  submitText = 'Agree',
  cancelText = 'Cancel',
  onSubmit = () => { },
  onSubmitButton = true,
  onCancelButton = true,
}) => {

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {contents}
        <DialogActions>
          {onCancelButton && cancelText !== '' &&
            <Button
              className=' !border-primary !hover:border-primaryhover !rounded-md bg-white text-black py-[10px] text-[15 px] px-4 '
              variant="outlined"
              onClick={handleClose}>{cancelText}
            </Button>
          }
          {onSubmitButton &&
            <Button
              className=' !bg-primary !hover:bg-primaryhover !rounded-md text-white py-[10px] text-[15 px] px-8 '
              onClick={onSubmit}>{submitText}
            </Button>
          }
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default AlertDialogSlide;