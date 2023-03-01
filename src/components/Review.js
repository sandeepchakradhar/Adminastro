import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { Rating } from "@mui/material";
import { useGetRatingQuery, useGetRatingByIdQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Review({ _id }) {
  const token = getToken("token");
  console.log(_id, "id in review");
  const { data: pata } = useGetRatingQuery(token);
  const { data } = useGetRatingByIdQuery({ token, _id });

  console.log(data, " data rating");
  console.log(pata, " pata rating");

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
      <Button variant="contained" onClick={handleClickOpen}>
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

        {data?.map(({ star, description }) => {
          return (
            <>
              <DialogContent className=" my-8">
                <DialogContentText id="alert-dialog-slide-description">
                {description}
                </DialogContentText>
              </DialogContent>

              <div className="px-3 py-3 ">
                <Rating
                  name="simple-controlled"
                  value={star}
                  readOnly
                />

                <span className="  text-info   float-right   ">{date}</span>
              </div>
            </>
          );
        })}
      </Dialog>
    </div>
  );
}
