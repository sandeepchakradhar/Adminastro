import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button2 from './Button2';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ color1, color2, name1, name2, contents }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className=" bg-danger">
                    confirm

                    {/* <Typography className=" bg-danger" id="modal-modal-title" variant="h6" component="h2">
                        confirm
                    </Typography> */}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {contents}

                    </DialogContentText>
                </DialogContent>
                <DialogActions className=" bg-danger">
                    {/* <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button> */}

                    <Button2 onClick={handleClose} className=" text-xs" name={name2} color={color2}></Button2>
                    <Button2 onClick={handleClose} name={name1} color={color1}></Button2>
                </DialogActions>
            </Dialog>
        </div>
    );
}