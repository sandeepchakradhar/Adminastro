import { Avatar, Box } from "@mui/material";
import React from "react";
// import BasicTabs from "./BasicTabs";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { getToken } from "../services/LocalStorage";
import { useGetProfileByIdQuery } from "../services/profile";
import HeaderTwo from "./HeaderTwo";

const IndividualUser = () => {
  const { _id } = useParams();
  console.log(_id, "ID");
  const token = getToken("token");
  console.log(token);
  const { data } = useGetProfileByIdQuery({ token, _id });
  console.log(data, "data");

  return (
    <div>
      <HeaderTwo header={"User Details"} />

      <div key={_id}>
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
              <h1 className=" text-xl">{data?.name}</h1>
            </div>
          </div>
          <div className=" divs mt-8">
            <p className=" text-info">Contact</p>
            <h1 className=" text-xl">{data?.phonenumber}</h1>
          </div>
          <div className=" divs mt-8">
            <p className=" text-info">Date Of Birth</p>
            <h1 className=" text-xl">
              {new Date(data?.dateOfBirth).toDateString()}
            </h1>
          </div>
          <div className=" divs mt-8">
            <p className=" text-info">Gender</p>
            <h1 className=" text-2xl">{data?.gender}</h1>
          </div>
        </div>
      </div>

      <div id="description" className=" mt-2 ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Email :</span>
            <span className=" text-lg "> {data?.email} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Created At :</span>
            <span className=" text-lg ">
              {" "}
              {new Date(data?.createdAt).toDateString()}{" "}
            </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Updated At :</span>
            <span className=" text-lg ">
              {" "}
              {new Date(data?.updatedAt).toDateString()}{" "}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Role :</span>
            <span className=" text-lg "> {data?.role} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Status :</span>
            <span className=" text-lg "> {data?.status} </span>
          </div>
        </div>
        {"   "}
      </div>
    </div>

    // <div>
      // {data?.name}

    //   <Box className=" ml-5 mt-2">
    //     {/* <BasicTabs data={data} /> */}
    //     IndividualUser
    //   </Box>
    // </div>
  );
};

export default IndividualUser;
