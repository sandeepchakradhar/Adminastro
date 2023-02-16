import { Avatar, Rating } from "@mui/material";
import React from "react";

const ExpertDetails = () => {
  return <div>
    <div className=" ml-5 mt-5 rounded-sm h-28 w-144 flex  gap-40 bg-success">
        <div   className=" divs flex gap-10  ml-6 mt-8">
        <Avatar
            className=" "
            sx={{ width: 60, height: 60 }}
            alt="Sandeep"
            src="https://media.licdn.com/dms/image/C4D03AQGTVuPCGh2c-w/profile-displayphoto-shrink_100_100/0/1650885404610?e=1680134400&v=beta&t=dU06dR-eGZGvBS5lcm7CoG9Q_1aNp1MAGGljv6jJN1s"
          />
          
        </div>
    </div>
  </div>;
};

export default ExpertDetails;
