import React, { useState } from "react";
import { Avatar, Button, Checkbox, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import EditIcon from "@mui/icons-material/Edit";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Container } from "@mui/system";
import { useRegisterMutation } from "../services/profile";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../features/userSlice";

const Form1 = () => {
  const [pimage, setFile] = useState();
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState([]);
  console.log(pimage, "image");
  const [register1] = useRegisterMutation();

  // const lol = { register};

  //   const res = await register1(lol);

  // for from Date
  // const [value1, setValue1] = React.useState(dayjs(""));

  const handleDOBChange = (e) => {
    let lol = new Date(e).toDateString();
    console.log(new Date(e).toDateString(), "valu1");
    setDateOfBirth(lol);
    // var date = new Date(value1),
    //     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //     day = ("0" + date.getDate()).slice(-2);

    // setDateOfBirth( [date.getFullYear(), mnth, day].join("-"));

    // setValue1(newValue1);
  };

  const dispatch = useDispatch();
const role= "reporter";
  const onSubmit = async ({ name, password, email, gender, phonenumber }) => {
    // console.log(
    //   name,
    //   password,
    //   email,
    //   gender,
    //   phonenumber,
    //   "ibhdsibsdfbidsbibsidfks"
    // );
    const data = new FormData();
    data.append("name", name);
    data.append("password", password);
    data.append("email", email);
    data.append("gender", gender);
    data.append("phonenumber", phonenumber);
    data.append("pimage", pimage);
    data.append("role", role);
    data.append("dateOfBirth", dateOfBirth);

    if (pimage && dateOfBirth) {
      console.log("first");
      dispatch(setUserInfo({ user: data.get("phonenumber") }));
      const res = await register1(data);
console.log(res,"response")
      if (res.data.status === "success") {
        toast(res.data.message);
      } else {
        toast(res.data.message);
      }
    } else {
      toast("something went wrong");
    }

    // console.log(data, "data");
  };

  // function convert1() {
  //   var date = new Date(value1),
  //     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  //     day = ("0" + date.getDate()).slice(-2);

  //     setDateOfBirth( [date.getFullYear(), mnth, day].join("-"));

  //   // return [date.getFullYear(), mnth, day].join("-");
  // }

  // console.log(data, "data");
  console.log(dateOfBirth);

  // console.log(convert1(), "date");

  return (
    <div>
      <ToastContainer />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("name")}
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
                  {...register("phonenumber")}
                />
              </div>
            </div>
            <div className="inputs mt-3  pl-5  ">
              <Avatar
                variant="rounded"
                alt="Sandeep"
                src="https://media.licdn.com/dms/image/C4D03AQGTVuPCGh2c-w/profile-displayphoto-shrink_100_100/0/1650885404610?e=1680134400&v=beta&t=dU06dR-eGZGvBS5lcm7CoG9Q_1aNp1MAGGljv6jJN1s"
                sx={{ width: 60, height: 60 }}
              />
              <Button component="label">
                <EditIcon></EditIcon>
                <input
                  type="file"
                  hidden
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
                  {...register("gender", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
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
                    value={dateOfBirth}
                    onChange={(e) => handleDOBChange(e)}
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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"></div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-5">
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
                  {...register("email")}
                />
              </div>
            </div>
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Set Password
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </div>
  );
};

export default Form1;
