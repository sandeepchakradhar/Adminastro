import React, { useState } from "react";
import { Avatar, Button, Checkbox, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import EditIcon from "@mui/icons-material/Edit";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Container } from "@mui/system";

const Form2 = () => {
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
    <div>
      <Container>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Reporting Types
              </label>
              <div className="">
                <select
                  className="block py-2 text-sm w-44  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                News Paper Name
              </label>
              <div className="">
                <select
                  className="block py-2 text-sm w-44  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Language
              </label>
              <div className="">
                <select
                  className="block py-2 text-sm w-64  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                  {...register("Language", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                  <option value="Bengali">Bengali</option>
                </select>
              </div>
            </div>
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Specialization
              </label>
              <div className="">
                <select
                  className="block py-2 text-sm w-64  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                  {...register("Specialization", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Denik Bhaskar">Denik Bhaskar</option>
                  <option value="Patrika">Patrika</option>
                  <option value="Nav Dunia">Nav Dunia</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
            <div className=" flex gap-2 mt-5">
              <div className=" flex gap-2 inputs mt-2">
                <div className=" inline relative   ">
                  <Checkbox
                    sx={{ paddingTop: 1.2 }}
                    id="rni"
                    {...register("RNI", {})}
                  />
                </div>
                <label
                  htmlFor="rni"
                  className=" my-auto text-sm font-medium text-gray-700"
                >
                  RNI
                </label>
              </div>
              <div className="inputs mt-3">
                <div className="">
                  <input
                    type="text"
                    id="price"
                    className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="RNI Registration Number"
                    {...register("RNIRegistrationNumber")}
                  />
                </div>
              </div>
            </div>
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Current Reporting Area
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Current Reporting Area"
                  {...register("CurrentReportingArea")}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhar No
              </label>
              <div className="">
                <input
                  type="text"
                  id="price"
                  className=" py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Aadhar No"
                  {...register("AadharNo")}
                />
                <div className=" mt-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Aadhar Card Upload
                  </label>
                  <span className=" ml-1">
                    <Button variant="contained" component="label">
                      <FileUploadIcon />
                      <input
                        type="file"
                        hidden
                        {...register("AadharDocument")}
                      />
                    </Button>
                  </span>
                </div>
              </div>
            </div>
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Pancard No
              </label>
              <div className="">
                <input
                  type="text"
                  className=" py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Pancard No"
                  {...register("PancardNo")}
                />
                <div className=" mt-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pancard Upload
                  </label>
                  <span className=" ml-1">
                    <Button variant="contained" component="label">
                      <FileUploadIcon />
                      <input
                        type="file"
                        hidden
                        {...register("PancardDocument")}
                      />
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Bank Holder Name
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm w-44  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Bank Holder Name"
                  {...register("BankHolderName")}
                />
              </div>
            </div>
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Account No
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm w-44  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="1234XXXXX1234"
                  {...register("AccountNo")}
                />
              </div>
            </div>
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                IFSC Code
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm w-44  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="ABCDXXXXXXXX "
                  {...register("IFSCcode")}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Conference Charge
              </label>
              <div className="">
                <input
                  type="number"
                  className="block py-2 text-sm w-44  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Amount in rupees"
                  {...register("ConferenceCharge")}
                />
              </div>
            </div>
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Reporting History
              </label>
              <div className="">
                <select
                  className="block py-2 text-sm w-44  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                  {...register("ReportingHistory", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Daily News Paper">Daily News Paper</option>
                  <option value="Weekly News Paper">Weekly News Paper</option>
                  <option value="Monthly Paper">Monthly Paper</option>
                </select>
              </div>
            </div>
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Documents
              </label>
              <div className="">
                <span className=" ml-1">
                  <Button variant="contained" component="label">
                    <FileUploadIcon />
                    <input
                      type="file"
                      hidden
                      {...register("AdditionalDocument")}
                    />
                  </Button>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Permanent Address
              </label>
              <div className="">
                <input
                  type="text"
                  className=" py-2 text-sm lg:w-128 md:w-96 sm:w-80 rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Address"
                  {...register("ParmnentAddress")}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="inputs mt-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Current Address
              </label>
              <div className="">
                <input
                  type="text"
                  className=" py-2 text-sm lg:w-128 md:w-96  sm:w-80 rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Address"
                  {...register("CurrentAddress")}
                />
              </div>
            </div>
          </div>

          {/* button */}
          <div className=" flex mt-4 ">
            <input type="submit" />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Form2;
