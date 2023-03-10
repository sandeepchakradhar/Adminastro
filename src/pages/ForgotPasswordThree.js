import React, { useState } from "react";
// import EmojiPeople from "@mui/icons-material/EmojiPeople";
import Buttons from "../components/Buttons";
import { Box } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../assets/PressVartaIcon2(1).png";
import { useAdminChangePasswordMutation } from "../services/profile";

const ForgotPasswordThree = () => {
  const navigate = useNavigate();
  // const [old, setOld] = useState();
  const [password, setConfirm1] = useState();
  const [cpassword, setConfirm2] = useState();

  // console.log(old, "old passs");
  console.log(password, "confirm 1");
  console.log(cpassword, "confirm 3");

  const [changePassword] = useAdminChangePasswordMutation();

  const {
    state: { phonenumber },
  } = useLocation();

  const handleSubmit = async () => {
    if (password === cpassword && password) {
      let data = { password, phonenumber };
      const res = await changePassword(data);
      console.log(res, "match");
      if (res.data.status === "success") navigate("/");
      console.log("sjdfibsdi");
    }
  };

  return (
    <div className="container">
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
              <h5 className=" text-info ">Set New Password</h5>
            </div>
            {/* <div className="relative mx-2 mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                
                </span>
              </div>
              <input
                type="tel"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder=" Old Password"
                onChange={(e) => setOld(e.target.value)}
              />
            </div> */}
            <div className="relative  mx-2 mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  {/* <Dialpad /> */}
                </span>
              </div>
              <input
                minLength={4}
                maxLength={10}
                type="text"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder=" New Password"
                onChange={(e) => setConfirm1(e.target.value)}
              />
            </div>
            <div className="relative  mx-2 mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  {/* <KeyIcon /> */}
                </span>
              </div>
              <input
                minLength={4}
                maxLength={10}
                type="text"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm New Password"
                onChange={(e) => setConfirm2(e.target.value)}
              />
            </div>
          </div>

          <div className=" pt-1 mx-2 mb-5 ">
            <Box onClick={() => handleSubmit()}>
              <Buttons name={"UPDATE PASSWORD"}></Buttons>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordThree;
