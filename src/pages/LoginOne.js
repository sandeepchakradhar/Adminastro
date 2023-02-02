import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
import DraftsIcon from "@mui/icons-material/Drafts";
import KeyIcon from "@mui/icons-material/Key";
import Buttons from "../components/Buttons";
import DialpadIcon from "@mui/icons-material/Dialpad";
import { useLoginMutation } from "../services/profile";
import { storeToken } from "../services/LocalStorage";
import { Box } from "@mui/system";

const LoginOne = () => {
  const navigate = useNavigate();
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");

  console.log(phonenumber, "number");
  console.log(password, "password");

  const [login] = useLoginMutation();

  const handleSubmit = async () => {
    
    const lol = { phonenumber, password };
    const res = await login(lol);
    console.log(res.data,"data")
    if (res.data.status === "success") {
      storeToken(res.data.token);
      console.log("login");
      navigate("/Dashboard");
    }
  };
  return (
    <div className="container">
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className=" mt-10 ml-10">
          <EmojiPeople fontSize="large" />
        </div>
        <div className="mx-auto">
          <div className=" mx-auto mt-11">
            <h1 className=" text-4xl  text-center">
              Welcome to <span className=" text-primary">App</span>
            </h1>
          </div>

          <div className=" mt-56">
            <div className="relative mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  <DialpadIcon />
                </span>
              </div>
              <input
                type="tel"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Number"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <div className="relative mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  <KeyIcon />
                </span>
              </div>
              <input
                type="Password"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className=" block float-right">
            <h5
              className=" text-info cursor-pointer"
              onClick={() => navigate("/forgotp1")}
            >
              Forgot Password?
            </h5>
          </div>
          <div className=" pt-10 ">
            <Box onClick={() => handleSubmit()}>
              <Buttons name={"Login"}></Buttons>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOne;
