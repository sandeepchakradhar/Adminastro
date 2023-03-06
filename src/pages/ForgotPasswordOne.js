import React, { useState } from "react";
import DialpadIcon from "@mui/icons-material/Dialpad";
import Image from "../assets/PressVartaIcon2(1).png";

import Buttons from "../components/Buttons";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useSendOTPMutation } from "../services/profile";
import { ToastContainer, toast } from "react-toastify";



const ForgotPasswordOne = () => {
  const [phonenumber, setNumber] = useState("");
  const navigate = useNavigate();
  console.log("phonenumber", phonenumber);

  const [sendOTP] = useSendOTPMutation();

  const handleSubmit = async () => {
    let mobileNumber = `+91${phonenumber}`;
    const data = { mobileNumber };
    const res = await sendOTP(data);
    console.log(res, "kknjkn");

    if (res.error.data === "pending") {
      toast("OTP sent")
      navigate("/forgotp2",
      {state:{
        phonenumber
      }});
    }
  };
  return (
    <div className="container">
      <ToastContainer/>
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className=" mt-10 mx-auto">
          <img src={Image} height="200" width="200" alt="Press Varta" />
        </div>
        <div className="mx-auto">
          <div className=" mx-auto mt-11">
            <h1 className=" text-4xl  text-center">
              Welcome to <span className=" text-primary">App</span>
            </h1>
          </div>

          <div className=" mt-56">
            <div className=" block text-center mb-10 ">
              <h5 className=" text-info ">Forgot Password</h5>
            </div>
            <div className="relative mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  <DialpadIcon />
                </span>
              </div>
              <input
                onChange={(e) => setNumber(e.target.value)}
                type="tel"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Registered Number"
              />
            </div>
            {/* <div className="relative mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  <KeyIcon />
                </span>
              </div>
              <input
                type="Password"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div> */}
          </div>
          <div className=" pt-1 ">
            <Box onClick={() => handleSubmit()}>
              <Buttons name={"Send OTP"}></Buttons>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordOne;
