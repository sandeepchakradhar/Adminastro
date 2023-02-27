import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddBanner from "../components/AddBanner";
import HeaderTwo from "../components/HeaderTwo";

const Banner = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HeaderTwo header={"Banners"} />
      <Box className=" m-3" >
        <Button
          onClick={() => {
            handleClickOpen();
          }}
        >
          Add Banner
        </Button>
      </Box>
      <AddBanner open={open} handleClose={handleClose} />
    </div>
  );
};

export default Banner;
