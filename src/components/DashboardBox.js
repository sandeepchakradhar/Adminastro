import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const DashboardBox = ({ name, icons }) => {
  return (
    <>
      <Card sx={{ display: "flex", maxWidth: "260px", height: "100px" }}>
        <CardContent sx={{ maxWidth: "80px", height: "100px" }}>
          <Typography variant="body2">icon</Typography>
        </CardContent>

        <CardContent className=" bg-danger w-full">
          <Typography variant="body2">name</Typography>
          <Typography variant="body2">number</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardBox;
