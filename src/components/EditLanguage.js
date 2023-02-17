import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import React from "react";
import Button2 from "./Button2";

const EditLanguage = ({ open2, handleClose2, name }) => {
  // For language change
  const [language, setLanguage] = React.useState("");
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleSubmit = () => {
    
console.log("editLAguagessss")
  };

  return (
    <div>
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {name}
        </DialogTitle>
        <DialogContent className=" my-5">
          <DialogContentText id="alert-dialog-description">
            <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={4}
            >
              <div className=" flex  gap-2">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-xm text-xs">
                        {/* ₹{" "} */}
                      </span>
                    </div>
                    <input
                      value={language}
                      onChange={handleLanguageChange}
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 mr-40 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Language"
                    />
                  </div>
                </div>
              </div>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=" bg-danger">
          <Box>
            <Button2 handleClose={handleClose2} color={"wite"} name={"Cancel"} />
          </Box>
          <Box onClick={handleSubmit}>
            <Button2 name={"Add"} />
          </Box>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditLanguage;
