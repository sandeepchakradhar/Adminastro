import React, { useState } from "react";
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useForm } from "react-hook-form";
import Button2 from "./Button2";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const AddExpert = ({ open2, handleClose2 }) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);

  // for from Date
  const [value1, setValue1] = React.useState(dayjs(""));

  const handleDateOneChange = (newValue1) => {
    setValue1(newValue1);
  };

  function convert1() {
    var date = new Date(value1),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  console.log(data, "data");
  console.log(convert1(), "date");
  return (
    <>
      <Dialog
      
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger " id="alert-dialog-title">
          {"Add Expert"}
        </DialogTitle>
        <DialogContent className=" my-5">
          <DialogContentText id="alert-dialog-description">
            <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={4}
            >
              <form
                onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
              >
                <div className="flex  gap-2">
                  <div className="inputs">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        type="text"
                        className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Full Name"
                        {...register("FullName")}
                      />
                    </div>
                  </div>

                  <div className="inputs">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        type="number"
                        className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Contact"
                        {...register("Contact")}
                      />
                    </div>
                  </div>
                  <div className="inputs  p-5">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://media.licdn.com/dms/image/C4D03AQGTVuPCGh2c-w/profile-displayphoto-shrink_100_100/0/1650885404610?e=1680134400&v=beta&t=dU06dR-eGZGvBS5lcm7CoG9Q_1aNp1MAGGljv6jJN1s"
                      sx={{ width: 100, height: 100 }}
                    />
                  </div>
                </div>

                <div className=" flex gap-2">
                  <div className="inputs">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Farher's Name
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        type="text"
                        className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Father's Name"
                        {...register("FathersName")}
                      />
                    </div>
                  </div>

                  <div className="inputs">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <select
                        className="block py-2 text-sm w-52  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Father's Name"
                        {...register("FathersName", { required: true })}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="inputs">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="Age"
                        id="price"
                        className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Age"
                        {...register("Age")}
                      />
                    </div>
                  </div>
                  <div className="inputs">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Experience Since
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
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
                </div>

                <div className="flex gap-2">
                  <div className="inputs">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Id
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        type="text"
                        className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email Id"
                        {...register("EmailId")}
                      />
                    </div>
                  </div>
                  <div className="inputs">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Reporting Types
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <select
                        className="block py-2 text-sm w-52  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder=""
                        {...register("ReportingTypes", { required: true })}
                      >
                        <option value="">Select</option>
                        <option value="Crime">Crime</option>
                        <option value="Civil">Civil</option>
                        <option value="Politics">Politics</option>
                      </select>
                    </div>
                  </div>
                  <div className="inputs">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      News Paper Name
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <select
                        className="block py-2 text-sm w-52  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder=""
                        {...register("NewsPaperName", { required: true })}
                      >
                        <option value="">Select</option>
                        <option value="Denik Bhaskar">Denik Bhaskar</option>
                        <option value="Patrika">Patrika</option>
                        <option value="Nav Dunia">Nav Dunia</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className=" flex mt-4 ">
                  <input type="submit" />
                </div>
              </form>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=" bg-danger">
          <Box>
            <Button2
              handleClose={handleClose2}
              color={"wite"}
              name={"Cancel"}
            />
          </Box>
          <Box>
            <Button2 type="" name={"Add"} />
          </Box>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddExpert;
