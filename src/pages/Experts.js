import { Button } from "@mui/material";
import React from "react";
import AddExpert from "../components/AddExpert";
import ExpertFilterBy from "../components/ExpertFilterBy";

const Experts = () => {

  // for filter by
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

// for Add Expert
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <div>
      <Button
        onClick={() => {
          handleClickOpen1();
        }}
      >
        Filter Expert
      </Button>
      <ExpertFilterBy open1={open1} handleClose1={handleClose1} />


      <Button
        onClick={() => {
          handleClickOpen2();
        }}
      >
        Add Expert
      </Button>
      <AddExpert open2={open2} handleClose2={handleClose2}/>
    </div>
  );
};

export default Experts;
