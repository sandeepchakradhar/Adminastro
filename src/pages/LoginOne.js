import React from "react";
import { useNavigate } from "react-router-dom";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
import DraftsIcon from "@mui/icons-material/Drafts";
import KeyIcon from "@mui/icons-material/Key";
import Buttons from "../components/Buttons";

const LoginOne = () => {
  const navigate = useNavigate();
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
                  <DraftsIcon />
                </span>
              </div>
              <input
                type="email"
                className="block py-2 text-sm h-12 w-96 rounded-md border border-secondary pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
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
              />
            </div>
          </div>
          <div className=" block float-right">
            <h5
              className=" text-info cursor-pointer"
              onClick={() => navigate("/form3")}
            >
              Forgot Password?
            </h5>
          </div>
          <div className=" pt-12 ">
            <Buttons name={"Login"}></Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOne;
