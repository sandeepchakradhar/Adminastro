import { Avatar, Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import BasicTabs from "./BasicTabs";

const UserDetails = () => {
  return (
    <div>
      <div className="  bg-success h-32 mt-5 ml-5 rounded-sm flex  gap-40 mr-5 ">
        
        <div className="divs flex gap-10  ml-6 mt-8 ">
          <Avatar
            className=" "
            sx={{ width: 60, height: 60 }}
            alt="Sandeep"
            src="https://media.licdn.com/dms/image/C4D03AQGTVuPCGh2c-w/profile-displayphoto-shrink_100_100/0/1650885404610?e=1680134400&v=beta&t=dU06dR-eGZGvBS5lcm7CoG9Q_1aNp1MAGGljv6jJN1s"
          />
          <div className=" ">
            <p className=" text-info">Name</p>
            <h1 className=" text-2xl">Sandeep Chakradhar</h1>
          </div>
        </div>
        <div className=" divs mt-8">
          <p className=" text-info">Contact</p>
          <h1 className=" text-2xl">7707707702</h1>
        </div>
        <div className=" divs mt-8">
          <p className=" text-info">Date Of Birth</p>
          <h1 className=" text-2xl">12 OCT 1998</h1>
        </div>
        <div className=" divs mt-8">
          <p className=" text-info">Gender</p>
          <h1 className=" text-2xl">Male</h1>
        </div>
      </div>
      <Box className="">
        <BasicTabs />
      </Box>
    </div>
  );
};

export default UserDetails;
