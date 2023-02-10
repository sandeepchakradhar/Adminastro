import { Button } from "@mui/material";
import React from "react";
import BasicTabs from "../components/BasicTabs";
import HeaderTwo from "../components/HeaderTwo";
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
      <HeaderTwo header={"Users"}/>
      <BasicTabs/>
         <Button
        onClick={() => {
          handleClickOpen1();
        }}
      >
        Filter User
      </Button>
      <UserFilterBy open1={open1} handleClose1={handleClose1} />

      <CustomizedTables />
    </div>
  );
};

export default Users;
