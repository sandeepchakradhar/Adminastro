import { Button } from "@mui/material";
import { removeToken } from "../services/LocalStorage";
import React from "react";
import "../components/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {



  const naviagte = useNavigate();



  const handleLogout = () => {

    console.log("first")
    removeToken("token");
    naviagte("/");
  };
  return (
    <div>
      <div className=" border-b  border-secondary bg-wite   h-20 ">
        
        <Button
          onClick={()=>handleLogout()}
          className=" float-right   "
          style={{ marginTop: "20px", marginRight: "25px" }}
          variant="text"
        >
          LOGOUT
        </Button>
      </div>
    </div>
  );
};

export default Header;
