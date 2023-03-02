import React from "react";
// import { Button } from "@mui/material";
// import { removeToken } from "../services/LocalStorage";
import "../components/Header.css";
// import { useNavigate } from "react-router-dom";
import MenuBar from "./MenuBar";
import { Box } from "@mui/system";

const Header = () => {
  // const naviagte = useNavigate();

  // const handleLogout = () => {
  //   console.log("first");
  //   removeToken("token");
  //   naviagte("/");
  // };
  return (
    <div>
      <div className=" float-right border-b  border-secondary bg-wite   h-20 ">
        <Box className=" m-3">
          <MenuBar />
        </Box>
        {/* <Button
          onClick={() => handleLogout()}
          className=" float-right   "
          style={{ marginTop: "20px", marginRight: "25px" }}
          variant="contained"
        >
          LOGOUT
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
