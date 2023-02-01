import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Buttons = (props) => {
  const navigate= useNavigate();
  return (
    <>
      <Button
        sx={{ width: "384px", height: "50px" }}
        variant="contained"
        color={props.color}
        onClick={()=> navigate(props.navigate)}
        
      >
        <Typography variant="caption">

        {props.name}
        </Typography>
      </Button>

      
    </>
  );
};

export default Buttons;
