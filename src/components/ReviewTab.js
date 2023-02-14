import React from "react";
import CallIcon from "@mui/icons-material/Call";
import { Avatar } from "@mui/material";

const ReviewTab = () => {
  const date = new Date().toLocaleString();

  return (
    <div>
      <div className=" border border-gray rounded-sm flex gap-28  h-20">
        <div className="divs flex gap-5  ml-4 mt-4 ">
          <Avatar
            variant="rounded"
            className=" "
            sx={{ width: 50, height: 50 }}
            alt="Sandeep"
            src="https://media.licdn.com/dms/image/C4D03AQGTVuPCGh2c-w/profile-displayphoto-shrink_100_100/0/1650885404610?e=1680134400&v=beta&t=dU06dR-eGZGvBS5lcm7CoG9Q_1aNp1MAGGljv6jJN1s"
          />
          <div className=" ">
            <h1 className="">Sandeep Chakradhar</h1>

            <h1 className="">
              <CallIcon fontSize="small" className=" text-info" /> &nbsp; ₹
              14.10
            </h1>
          </div>
        </div>
        <div className=" mt-4 ">
          <span className=" text-info">Duartion:</span>
          <span> 42 Minutes </span>
        </div>
        <div className=" mt-4 ">
          <span className=" text-info">Status:</span>
          <span className=" text-primary"> Completed </span>
        </div>
        <div className=" mt-4 ">
          <span className=" text-info">Date & Time:</span>
          <span> {date}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewTab;
