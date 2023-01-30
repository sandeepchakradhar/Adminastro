import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className=" border-b  border-secondary  h-20  bg-wite">
        
          <Button variant="text">
            LOGOUT
          </Button>
        
      </div>
    </div>
  );
};

export default Header;
