import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddPayoutRequest from "../components/AddPayoutRequest";
import HeaderTwo from "../components/HeaderTwo";
import PayoutTabs from "../components/PayoutTabs";

const Payout = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <HeaderTwo header={"Payout Request"} />
      <Box className=" ml-5 mt-2">
        <PayoutTabs />
      </Box>

      <Button
        onClick={() => {
          handleClickOpen();
        }}
      >
        Add Payout Request
      </Button>
      <AddPayoutRequest open={open} handleClose={handleClose} />
    </div>
  );
};

export default Payout;
