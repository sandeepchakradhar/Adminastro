import { Avatar, Button } from "@mui/material";
import React from "react";
import AddExpert from "../components/AddExpert";
import ExpertFilterBy from "../components/ExpertFilterBy";
import HeaderTwo from "../components/HeaderTwo";
import CustomizedTables from "../components/Tabels";
// import { useHelloQuery } from "../services/profile";
import ExpertDetails from "./ExpertDetails";
import { useGetReportersQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";
import { Link } from "react-router-dom";

const Experts = () => {
  const token = getToken("token");
  console.log(token, "token");
  const { data } = useGetReportersQuery(token);
  console.log(data, "data");
  // for filter by


  // const [open1, setOpen1] = React.useState(false);

  // const handleClickOpen1 = () => {
  //   setOpen1(true);
  // };

  // const handleClose1 = () => {
  //   setOpen1(false);
  // };

  // // for Add Expert
  // const [open2, setOpen2] = React.useState(false);

  // const handleClickOpen2 = () => {
  //   setOpen2(true);
  // };

  // const handleClose2 = () => {
  //   setOpen2(false);
  // };

  return (
    <div>
      <HeaderTwo header={"Experts"} />
{ data?.map(({name,phonenumber,_id,gender,pimage,email,updatedAt,dateOfBirth})=>{
  return(
<div key={_id}>
        <Link className="  bg-success h-32 mt-5 ml-5 md:h-48  rounded-sm flex  md:gap-24 gap-40 mr-5 " to={`IndividualExpert/${_id}`}>
          <div className="divs flex gap-10  ml-6 mt-8 ">
            <Avatar
              className=" "
              sx={{ width: 60, height: 60 }}
              alt="Sandeep"
              src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/pimage/${pimage}`}
            />
            <div className=" ">
              <p className=" text-info">Name</p>
              <h1 className=" text-2xl">{name}</h1>
            </div>
          </div>
          <div className=" divs mt-8">
            <p className=" text-info">Contact</p>
            <h1 className=" text-2xl">{phonenumber}</h1>
          </div>
          <div className=" divs mt-8">
            <p className=" text-info">Date Of Birth</p>
            <h1 className=" text-2xl">{new Date(dateOfBirth).toDateString()}</h1>
          </div>
          <div className=" divs mt-8">
            <p className=" text-info">Gender</p>
            <h1 className=" text-2xl">{gender}</h1>
          </div>
        </Link>
      </div> 

  )
})

       
}
      {/* 
      <Button
        onClick={() => {
          handleClickOpen1();
        }}
      >
        Filter Expert
      </Button>
      <ExpertFilterBy open1={open1} handleClose1={handleClose1} />

      <Button
        onClick={() => {
          handleClickOpen2();
        }}
      >
        Add Expert
      </Button>
      <AddExpert open2={open2} handleClose2={handleClose2} /> */}
    </div>
  );
};

export default Experts;
