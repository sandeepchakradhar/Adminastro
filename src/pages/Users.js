import { Button } from "@mui/material";
import React from "react";
import CustomizedTables from "../components/Tabels";
import UserFilterBy from "../components/UserFilterBy";

const Users = () => {
  // for filter by
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
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
      <UserFilterBy open1={open1} handleClose1={handleClose1} />

      <CustomizedTables />
    </div>
  );
};

export default Users;
