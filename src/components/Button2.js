import React from "react";
import { Button, Typography } from "@mui/material";

const Button2 = ({ name, color }) => {
  return (
    <div>
      <Button className=" text-xs" sx={{ padding: "10px 16px" }} variant="contained" color={color}>
        <Typography variant="caption">

        {name}
        </Typography>
      </Button>
    </div>
  );
};

export default Button2;
