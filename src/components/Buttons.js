import React from "react";
import { Button, Typography } from "@mui/material";

const Buttons = ({ name,color }) => {
  return (
    <>
      <Button
        sx={{ width: "400px", height: "50px" }}
        variant="contained"
        color={color}
        
      >
        <Typography variant="caption">

        {name}
        </Typography>
      </Button>

      
    </>
  );
};

export default Buttons;
