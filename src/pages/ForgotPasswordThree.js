import React, { useRef, useState } from "react";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
import DraftsIcon from "@mui/icons-material/Drafts";
import KeyIcon from "@mui/icons-material/Key";
import Buttons from "../components/Buttons";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Dialpad from "@mui/icons-material/Dialpad";

const LoginOne = () => {

  



  const navigate = useNavigate();
  const [confirm1, setConfirm1] = useState("");
  const [confirm2, setConfirm2] = useState("");

  console.log(confirm1, confirm2, "passssss");

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
            <div className=" block text-center mb-10 ">
              <h5 className=" text-info ">Set New Password</h5>
            </div>
            <div className="relative mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  {/* <Dialpad /> */}
                </span>
              </div>
              <input
              
                type="tel"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder=" New Password"
                onChange={(e) => setConfirm1(e.target.value)}
              />
            </div>
            <div className="relative mt-3 mb-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                <span className="text-gray sm:text-xm text-xs">
                  {/* <KeyIcon /> */}
                </span>
              </div>
              <input
            
                type="Password"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm New Password"
                onChange={(e) => setConfirm2(e.target.value)}
              />
            </div>
          </div>

          <div className=" pt-1 ">
            <Box onClick={() => navigate("/")}>
              <Buttons name={"UPDATE PASSWORD"}></Buttons>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOne;
