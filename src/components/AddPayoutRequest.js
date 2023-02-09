import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Button2 from "../components/Button2";
import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const AddPayoutRequest = ({ open, handleClose }) => {
  // for  Date
  const [value, setValue] = React.useState(dayjs(""));

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };
  function convert1(value) {
    var date = new Date(value),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  console.log(convert1(value),"date and time");


  //for request amount
   const [amount, setAmount] = React.useState("");
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  //for Banck holder name
   const [name, setName] = React.useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  //for ACC Number
   const [accNumber, setAccNumber] = React.useState("");
  const handleAccNumberChange = (event) => {
    setAccNumber(event.target.value);
  };
  //for IFSC Code
   const [code, setCode] = React.useState("");
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  console.log(amount,"amount")
  console.log(name,"name")
  console.log(accNumber,"accNumber")
  console.log(code,"code")

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {"Payout Request"}
        </DialogTitle>
        <DialogContent className=" my-5">
          <DialogContentText id="alert-dialog-description">
            <Stack
              className=" "
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={4}
            >
              <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Request Amount
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                    value={amount}
                    onChange={handleAmountChange}
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
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        inputFormat="DD/MM/YYYY"
                        value={value}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{ ".MuiInputBase-input": { padding: 1 } }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Time
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        value={value}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{ ".MuiInputBase-input": { padding: 1 } }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bank Holder Name
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                    value={name}
                    onChange={handleNameChange}
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
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Account Number
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                    value={accNumber}
                    onChange={handleAccNumberChange}
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
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    IFSC Code
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                    value={code}
                    onChange={handleCodeChange}
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3"></div>
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
