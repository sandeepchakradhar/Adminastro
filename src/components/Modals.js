// import React from 'react'

// const Modals = () => {
//   return (
//     <div>Modals</div>
//   )
// }
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button2 from "./Button2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  pl: 2,
};

const Modals = ({ color1, color2, name1, name2, contents }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>



          <Typography className=" bg-danger" id="modal-modal-title" variant="h6" component="h2">
            confirm
          </Typography>



          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {contents}
          </Typography>

          <div className=" bg-danger ml-20 mt-9  flex gap-2">

            <Button2 className=" text-xs" name={name2} color={color2}></Button2>
            <Button2 name={name1} color={color1}></Button2>
          </div>
        </Box>
      </Modal>
    </div >
  );
};

export default Modals;
