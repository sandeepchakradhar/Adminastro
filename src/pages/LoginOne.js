import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import EmojiPeople from "@mui/icons-material/EmojiPeople";
// import DraftsIcon from "@mui/icons-material/Drafts";
import KeyIcon from "@mui/icons-material/Key";
import Buttons from "../components/Buttons";
import DialpadIcon from "@mui/icons-material/Dialpad";
import { useLoginMutation } from "../services/profile";
import { storeToken } from "../services/LocalStorage";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";

import { ToastContainer, toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "../assets/PressVartaIcon2(1).png";

const LoginOne = () => {
  const navigate = useNavigate();
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  // const [token, setToken] = useState("");

  const handleVisible = () => {
    if (visibility === true) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async () => {
    const lol = { phonenumber, password };

    const res = await login(lol);

    if (res?.data?.userLogin?.role === "admin") {
      storeToken(res?.data?.token);
      navigate("/Dashboard/Analytics");
    } else if (res.data.status === "failed") {
      toast(res.data.message);
    } else {
      toast("something went wrong");
    }
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className=" mt-10 mx-auto">
          <img src={Image} height="200" width="200" alt="Press Varta" />
        </div>
        <div className=" mx-auto">
          <div className=" mx-auto mt-11">
            <h1 className=" text-4xl  text-center">
              Welcome to <span className=" text-primary">App</span>
            </h1>
          </div>

          <div className=" mt-56">
            <div className="relative ml-2 mr-2  mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  <DialpadIcon />
                </span>
              </div>
              <input
                type="tel"
                className="block py-2  text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Number"
                maxLength={10}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <div className="relative ml-2 mr-2 mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  <KeyIcon />
                </span>
              </div>
              <input
                maxLength={10}
                type={!visibility ? "password" : "tel"}
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className=" absolute inset-y-0 right-0 flex items-center pr-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  <Box onClick={() => handleVisible()}>
                    <VisibilityIcon />
                  </Box>
                </span>
              </div>
            </div>
          </div>
          <div className=" my-3 mr-2 block float-right">
            <h5
              className=" text-info cursor-pointer"
              onClick={() => navigate("/forgotp1")}
            >
            Forget Password
            </h5>
          </div>
          <div className=" pt-10 mx-2 mb-5 ">
            <Box onClick={() => handleSubmit()}>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Buttons name={"Login"}></Buttons>
              )}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOne;
