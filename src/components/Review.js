import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { Rating } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Review() {
  const [open, setOpen] = React.useState(false);

  const [rating, setRating] = React.useState(1);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const date = new Date().toLocaleString();

  console.log(rating, "rating");

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Review
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className=" bg-danger ">
          <span className=" left-0">Reivew</span>
          <CloseIcon className=" float-right" onClick={handleClose} />
        </DialogTitle>
        <DialogContent className=" my-8">
          <DialogContentText id="alert-dialog-slide-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ut erat eu magna aliquet lacinia non id arcu.
          </DialogContentText>
        </DialogContent>

        <div className="px-3 py-3 ">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
          />

          <span className="  text-info   float-right   ">{date}</span>
        </div>
      </Dialog>
    </div>
  );
}
