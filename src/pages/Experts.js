import { Button } from "@mui/material";
import React from "react";
import ExpertFilterBy from "../components/ExpertFilterBy";

const Experts = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        onClick={() => {
          handleClickOpen();
        }}
      >
        Add Expert
      </Button>
      <ExpertFilterBy open={open} handleClose={handleClose} />
    </div>
  );
};

export default Experts;
