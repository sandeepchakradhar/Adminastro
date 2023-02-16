import React, { useState } from "react";
import { Avatar, Button, Checkbox, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import EditIcon from "@mui/icons-material/Edit";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Container } from "@mui/system";

const Form1 = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);

  // for from Date
  const [value1, setValue1] = React.useState(dayjs(""));

  const handleDOBChange = (newValue1) => {
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
    <div>
      <Container>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3 ">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Full Name"
                  {...register("FullName")}
                />
              </div>
            </div>

            <div className="inputs mt-3 ">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <div className="">
                <input
                  type="number"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Contact"
                  {...register("Contact")}
                />
              </div>
            </div>
            <div className="inputs mt-3  pl-5  ">
              <Avatar
                alt="Sandeep"
                src="https://media.licdn.com/dms/image/C4D03AQGTVuPCGh2c-w/profile-displayphoto-shrink_100_100/0/1650885404610?e=1680134400&v=beta&t=dU06dR-eGZGvBS5lcm7CoG9Q_1aNp1MAGGljv6jJN1s"
                sx={{ width: 100, height: 100 }}
              />
              <EditIcon />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Father's Name
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Father's Name"
                  {...register("FathersName")}
                />
              </div>
            </div>

            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <div className="">
                <select
                  className="block py-2 text-sm w-44  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Gender"
                  {...register("Gender", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Date Of Birth
              </label>
              <div className="">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    inputFormat="DD/MM/YYYY"
                    value={value1}
                    onChange={handleDOBChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{
                          ".MuiInputBase-input": {
                            padding: 1,
                            width: "110px",
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Email Id
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email Id"
                  {...register("EmailId")}
                />
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Form1;
