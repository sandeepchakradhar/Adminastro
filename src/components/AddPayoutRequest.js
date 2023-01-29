import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import Button2 from "../components/Button2";

const AddPayoutRequest = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {"Add Recharge"}
        </DialogTitle>
        <DialogContent className=" my-5">
          <DialogContentText id="alert-dialog-description">
            <Stack className=" "
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={4}
            >
              <div className=" flex gap-2">
                <div>
                  <label
                    for="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                   Request Amount
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                     
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex gap-2">
                <div>
                  <label
                    for="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-xm text-xs">
                        ₹{" "}
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
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPayoutRequest;
