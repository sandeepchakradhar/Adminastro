import { Button } from "@mui/material";
import React from "react";
import AddSpecializationDialog from "../components/AddSpecializationDialog";

const Specialization = () => {
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
        Add Specialization
      </Button>

      <AddSpecializationDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default Specialization;
