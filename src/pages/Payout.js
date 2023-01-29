import { Button } from "@mui/material";
import React from "react";
import AddPayoutRequest from "../components/AddPayoutRequest";

const Payout = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return <div>
     <Button
        onClick={() => {
          handleClickOpen();
        }}
      >
        Add Payout Request
      </Button>
      <AddPayoutRequest open={open} handleClose={handleClose}/>


  </div>;
};

export default Payout;
