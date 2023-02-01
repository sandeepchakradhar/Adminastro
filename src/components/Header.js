import { Button } from "@mui/material";

import React from "react";
import "../components/Header.css";

const Header = () => {
  return (
    <div >
      <div className=" border-b  border-secondary bg-danger   h-20 ">
        <Button className=" float-right   " style={{marginTop:"20px", marginRight:"25px"}} variant="text" >LOGOUT</Button>
      </div>
    </div>
  );
};

export default Header;
