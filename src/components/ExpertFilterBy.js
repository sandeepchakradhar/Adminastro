import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { InputLabel, MenuItem, Select, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import Button2 from "../components/Button2";
import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const ExpertFilterBy = ({ open1, handleClose1 }) => {
  // for from Date
  const [value1, setValue1] = React.useState(dayjs(""));

  const handleDateOneChange = (newValue1) => {
    setValue1(newValue1);
  };
  // for to Date
  const [value2, setValue2] = React.useState(dayjs(""));

  const handleDateTwoChange = (newValue2) => {
    setValue2(newValue2);
  };

  // For age
  const [age, setAge] = React.useState("");
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  // For gender
  const [gender, setGender] = React.useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  // For status
  const [status, setStatus] = React.useState("");
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };



console.log(value1.$d,"first")


function convert1(value1) {
  var date = new Date(value1),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

function convert2(value2) {
  var date = new Date(value2),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

console.log(convert1(value1))
console.log(convert2(value2))

  return (
    <div>
      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {"Filter By"}
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
              <div className=" flex  gap-2">
                <div className="">
                  <label
                    htmlFor="demo-simple-select-label"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <div className="relative mt-1 rounded-md  shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <Select
                    className=" w-40 h-11"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleAgeChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="demo-simple-select-label"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <Select
                    className=" w-40 h-11"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={gender}
                      label="Gender"
                      onChange={handleGenderChange}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Others</MenuItem>
                    </Select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="demo-simple-select-label"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <Select
                    className=" w-40  h-11"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Age"
                      onChange={handleStatusChange}
                    >
                      <MenuItem value={"Active"}>Active</MenuItem>
                      <MenuItem value={"Inactive"}>Inactive</MenuItem>
                      
                    </Select>
                  </div>
                </div>
              </div>
              <div className=" flex gap-2">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    From
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        inputFormat="DD/MM/YYYY"
                        value={value1}
                        onChange={handleDateOneChange}
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
                    To
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        inputFormat="DD/MM/YYYY"
                        value={value2}
                        onChange={handleDateTwoChange}
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
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=" bg-danger">
          <Box>
            <Button2 handleClose={handleClose1} color={"wite"} name={"Cancel"} />
          </Box>
          <Box>
            <Button2 name={"Add"} />
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ExpertFilterBy;
