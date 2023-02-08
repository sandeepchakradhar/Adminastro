import { Button } from "@mui/material";
import React from "react";
import AddPayoutRequest from "../components/AddPayoutRequest";
import HeaderTwo from "../components/HeaderTwo";

const Payout = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return <div>
      <HeaderTwo header={"Payout Request"}/>

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
