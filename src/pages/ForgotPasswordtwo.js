import React, { useState } from "react";
import Buttons from "../components/Buttons";
import { Box } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import Image from "../assets/PressVartaIcon2(1).png";


import { useNavigate, useLocation } from "react-router-dom";
import { useVerifyOTPMutation, useSendOTPMutation } from "../services/profile";

const ForgotPasswordtwo = () => {
  const [otp, setOtp] = useState("");
  console.log("OTP ", otp);

  const navigate = useNavigate();
  const {
    state: { phonenumber },
  } = useLocation();
  const [verifyOTP] = useVerifyOTPMutation();

  const handleSubmit = async () => {
    let mobileNumber = `+91${phonenumber}`;
    console.log(mobileNumber);
    const data = { mobileNumber, otp };
    const res = await verifyOTP(data);

    if (res.error.data === "approved") {
      navigate("/forgotp3", {
        state: {
          phonenumber,
        },
      });
    } else {
      toast("you have entered wrong OTP");
    }
    console.log(res, "verify data");
  };

  const [sendOTP] = useSendOTPMutation();

  const resendOTP = async () => {
    let mobileNumber = `+91${phonenumber}`;
    const data = { mobileNumber };
    const res = await sendOTP(data);
    console.log(res, "iuuygiugugugu");
    if (res.error.data === "pending") {
      toast("OTP Sent again.");
    }
  };

  return (
    <div className="container">
      <ToastContainer />

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
              <h5 className=" text-info ">Verify OTP</h5>
            </div>
            <div className="relative mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  {/* <Dialpad /> */}
                </span>
              </div>
              <input
                onChange={(e) => setOtp(e.target.value)}
                type="tel"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter OTP"
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
              <Buttons name={"verify OTP"}></Buttons>
            </Box>
          </div>
          <div className=" block float-right pt-4">
            <h5
              className=" text-primary cursor-pointer"
              onClick={() => resendOTP()}
            >
              Resend OTP
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordtwo;
