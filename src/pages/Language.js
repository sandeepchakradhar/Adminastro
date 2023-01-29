import Button from "@mui/material/Button";
import React from "react";
import AddLanguage from "../components/AddLanguage";




const Language = () => {


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
        Add Language
      </Button>

      <AddLanguage open={open} handleClose={handleClose}/>
    </div>
  );
};

export default Language;
