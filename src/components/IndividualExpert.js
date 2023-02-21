import { Avatar, Box } from "@mui/material";
import React from "react";
// import BasicTabs from "./BasicTabs";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { getToken } from "../services/LocalStorage";
import { useGetProfileByIdQuery } from "../services/profile";
import HeaderTwo from "./HeaderTwo";

const IndividualExpert = () => {
  const { _id } = useParams();
  console.log(_id, "ID");
  const token = getToken("token");
  console.log(token);
  const { data } = useGetProfileByIdQuery({ token, _id });
  console.log(data, "data");

  return (
    <div>
      <HeaderTwo header={"Expert Details"}/>
      <div className="  bg-success h-32 mt-5 ml-5 md:h-48  rounded-sm flex  md:gap-24 gap-40 mr-5 ">
        <div className="divs flex gap-10  ml-6 mt-8 ">
          <Avatar
            className=" "
            sx={{ width: 60, height: 60 }}
            alt="Sandeep"
            src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/pimage/${data?.pimage}`}
          />
          <div className=" ">
            <p className=" text-info">Name</p>
            <h1 className=" text-2xl">{data?.name}</h1>
          </div>
        </div>
        <div className=" divs mt-8">
          <p className=" text-info">Contact</p>
          <h1 className=" text-2xl">{data?.phonenumber}</h1>
        </div>
        <div className=" divs mt-8">
          <p className=" text-info">Date Of Birth</p>
          <h1 className=" text-2xl">
            {new Date(data?.dateOfBirth).toDateString()}
          </h1>
        </div>
        <div className=" divs mt-8">
          <p className=" text-info">Gender</p>
          <h1 className=" text-2xl">{data?.gender}</h1>
        </div>
      </div>
    </div>
  );
};

export default IndividualExpert;
