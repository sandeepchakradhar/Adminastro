import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  Stack,
} from "@mui/material";
import Button2 from "./Button2";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const AddBanner = ({ open, handleClose }) => {
    
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {"Add Banner"}
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
                    Add Banner
                  </label>
                  <div className="block py-2 text-sm w-auto rounded-md border border-secondary pl-7 pr-12 mr-40 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <Input
                    
                      type="file"
                      name="price"
                      id="price"
                      className=""
                      placeholder="Language"
                    />

                    <div className="pointer-events-none absolute inset-y-0 right-48 flex items-center pt-2 ">
                      <span className="text-gray-500 sm:text-xm text-xs">
                        <FileUploadIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=" bg-danger">
          <Box>
            <Button2 handleClose={handleClose} color={"wite"} name={"Cancel"} />
          </Box>
          <Box>
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

export default AddBanner;
