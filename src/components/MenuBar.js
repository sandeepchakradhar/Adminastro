import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { removeToken } from "../services/LocalStorage";
import { useNavigate } from "react-router-dom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

export default function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const naviagte = useNavigate();

  const handleLogout = () => {
    console.log("first");
    removeToken("token");
    naviagte("/");
    handleClose();
};
const handleProfile=()=>{
      naviagte("/Dashboard/Admins");
      handleClose();

  }


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuSharpIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={()=> handleProfile()}>My Profile</MenuItem>
        <MenuItem onClick={() => handleLogout()}>
    <span className=" text-primary">

          Logout
    </span>
          
        </MenuItem>
      </Menu>
    </div>
  );
}
