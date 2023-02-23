import React, { useState } from "react";
import { Avatar, Button, Checkbox, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import EditIcon from "@mui/icons-material/Edit";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Container } from "@mui/system";
import { useFormMutation } from "../services/profile";
import { useGetPaperNameQuery } from "../services/profile";
import { useGetLanguageQuery } from "../services/profile";
import { useGetCategoryQuery } from "../services/profile";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

const Form2 = () => {
  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState([]);

  // for from Date
  const [value1, setValue1] = React.useState(dayjs(""));

  const handleDateOneChange = (newValue1) => {
    setValue1(newValue1);
  };

  const { data } = useGetPaperNameQuery();
  const { data: lang } = useGetLanguageQuery();
  const { data: specialization } = useGetCategoryQuery();

  console.log(data, "data");

  const [form2] = useFormMutation();

  const onSubmit = async ({
    fathersName,
    reporter,
    experienceDay,
    formOf,
    experienceMonth,
    experienceYear,
    permanentAddress,
    panImg,
    adharImg,
    panNumber,
    adharNumber,
    nationality,
    currentAddress,
    BankHolderName,
    AccountNumber,
    ReferenceContact,
    IFSC,
    profession,
    UPI,
    RNI,
    paperType,
    language,
    category,
    ownerOf,
  }) => {
    let data = new FormData();
    data.append("fathersName", fathersName);
    data.append("experienceDay", experienceDay);
    data.append("formOf", formOf);
    data.append("experienceMonth", experienceMonth);
    data.append("experienceYear", experienceYear);
    data.append("permanentAddress", permanentAddress);
    data.append("panImg", panImg);
    data.append("adharImg", adharImg);
    data.append("panNumber", panNumber);
    data.append("nationality", nationality);
    data.append("adharNumber", adharNumber);
    data.append("currentAddress", currentAddress);
    data.append("BankHolderName", BankHolderName);
    data.append("AccountNumber", AccountNumber);
    data.append("ReferenceContact", ReferenceContact);
    data.append("IFSC", IFSC);
    data.append("profession", profession);
    data.append("UPI", UPI);
    data.append("RNI", RNI);
    data.append("paperType", paperType);
    data.append("paperType", paperType);
    data.append("language", language);
    data.append("category", category);
    data.append("ownerOf", ownerOf);

    // if (pimage && dateOfBirth) {
    //   const res = await register1(data);
    //   if (res.data.status === "success") {
    //     toast(res.data.message);
    //   } else {
    //     toast(res.data.message);
    //   }
    // } else {
    //   toast("something went wrong");
    // }
  };

  function convert1() {
    var date = new Date(value1),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  console.log(convert1(), "date");
  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("fathersName")}
                />
              </div>
            </div>
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

                  {data?.map(({ _id, typeOfPaper }) => {
                    return (
                      <>
                        {/* <option value="">Select</option> */}
                        <option value={typeOfPaper}>{typeOfPaper}</option>
                      </>
                    );
                  })}
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
                <input
                  type="text"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="News Paper Name"
                  {...register("newsPaperName")}
                />
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
                  {lang?.map(({ _id, language }) => {
                    return (
                      <option key={_id} value={language}>
                        {language}
                      </option>
                    );
                  })}
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
                  {specialization?.map(({ _id, category }) => {
                    return (
                      <option key={_id} value={category}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className=" flex gap-2 mt-5">
              <div className="inputs mt-3">
                <div className="">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    RNI
                  </label>
                  <input
                    type="text"
                    className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="RNI Registration Number"
                    {...register("RNIRegistrationNumber")}
                  />
                </div>
              </div>
            </div>
            <div className="inputs mt-5">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mt-3"
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
            <div className="inputs mt-5">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mt-3"
              >
                Nationality
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Nationality"
                  {...register("nationality")}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className=" flex gap-2 mt-5">
              <div className="inputs mt-3">
                <div className="">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Experience Year
                  </label>
                  <input
                    type="text"
                    className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Experience Year"
                    {...register("experienceYear")}
                  />
                </div>
              </div>
            </div>
            <div className="inputs mt-5">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mt-3"
              >
                Experience Month
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Experience Month"
                  
                  {...register("experienceMonth")}
                />
              </div>
            </div>
            <div className="inputs mt-5">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mt-3"
              >
                Experience Day
              </label>
              <div className="">
                <input
                  type="text"
                  className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Experience Day"
                  {...register("experinceDay")}
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
                Designation
              </label>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="reporter"
                name="radio-buttons-group"
              >
                <div className=" flex">
                  <FormControlLabel
                    value="reporter"
                    control={<Radio />}
                    label="Reporter"
                  />
                  <FormControlLabel
                    value="owner"
                    control={<Radio />}
                    label="Owner"
                  />
                  <FormControlLabel
                    sx={{ width: 180 }}
                    value="reporter&owner"
                    control={<Radio />}
                    label="Reporter & Owner"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </div>
              </RadioGroup>
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
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Form2;
