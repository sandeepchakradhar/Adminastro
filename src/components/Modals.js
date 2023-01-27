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
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modals = ({ color1, color2, name1, name2 }) => {
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
          <div color="danger">
            <Typography className=" text-cyan-500" id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

          <div className=" ml-20 mt-9  flex gap-2">
          
            <Button2 className=" text-xs" name={name2} color={color2}></Button2>
            <Button2 name={name1} color={color1}></Button2>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
