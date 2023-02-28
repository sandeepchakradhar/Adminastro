import { Avatar, Box, Button } from "@mui/material";
import React from "react";
// import BasicTabs from "./BasicTabs";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { getToken } from "../services/LocalStorage";
import {
  useGetProfileByIdQuery,
  useGetReporterDetailsByIdQuery,
} from "../services/profile";
import HeaderTwo from "./HeaderTwo";
import Review from "./Review";

const IndividualExpert = () => {
  const { _id } = useParams();
  console.log(_id, "ID");
  const token = getToken("token");
  console.log(token);
  const { data } = useGetProfileByIdQuery({ token, _id });
  const { data: Data } = useGetReporterDetailsByIdQuery({ token, _id });
  console.log(data, "data");
  console.log(Data, "Data");

  return (
    <div>
      <HeaderTwo header={"Expert Details"} />
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
        <div className=" divs mt-8">
          <p className=" text-info">Verify Expert </p>
          <Button className=" mt-2" variant="contained"> Verified </Button>
        </div>
      </div>
      <Review _id={_id} />
      {""}
      <div id="description" className=" mt-2 ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Father's Name :</span>
            <span className=" text-lg "> {Data?.fatherName} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Account Number :</span>
            <span className=" text-lg "> {Data?.AccountNumber} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Bank Holder Name :</span>
            <span className=" text-lg "> {Data?.BankHolderName} </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">IFSC :</span>
            <span className=" text-lg "> {Data?.IFSC} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">RNI :</span>
            <span className=" text-lg "> {Data?.RNI} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Reference Contact:</span>
            <span className=" text-lg "> {Data?.ReferenceContact} </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Email :</span>
            <span className=" text-lg "> {Data?.reporter.email} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Created At :</span>
            <span className=" text-lg ">
              {" "}
              {new Date(Data?.createdAt).toDateString()}{" "}
            </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Updated At :</span>
            <span className=" text-lg ">
              {" "}
              {new Date(Data?.updatedAt).toDateString()}{" "}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">UPI :</span>
            <span className=" text-lg "> {Data?.UPI} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Aadhar Card No :</span>
            <span className=" text-lg "> {Data?.adharNumber} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info "> Pancard No :</span>
            <span className=" text-lg "> {Data?.panNumber} </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Experience Years :</span>
            <span className=" text-lg "> {Data?.experienceYear} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Experience Months :</span>
            <span className=" text-lg "> {Data?.experienceMonth} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Experience Days :</span>
            <span className=" text-lg "> {Data?.experienceDay} </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Specialization :</span>
            <span className=" text-lg "> {Data?.category} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Languages :</span>
            {Data?.language.map((language) => {
              return <span className=" text-lg "> {language} </span>;
            })}
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info "> Paper Type :</span>
            {Data?.paperType.map((paperType) => {
              return <span className=" text-lg "> {paperType} </span>;
            })}
            <span className=" text-lg "> {Data?.pancardNumber} </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Position :</span>
            <span className=" text-lg "> {Data?.formOf} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info "> Owns :</span>
            <span className=" text-lg "> {Data?.ownerOf} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Website :</span>
            <span className=" text-lg "> {Data?.website} </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Profession (If Other) :</span>
            <span className=" text-lg "> {Data?.profession} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Conference Charge :</span>
            <span className=" text-lg "> {Data?.conference} </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Visiting Charge :</span>
            <span className=" text-lg "> {Data?.visiting} </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">
              Press Conference Availability :
            </span>
            <span className=" text-lg ">
              {" "}
              {Data?.pressConferenceAvailability === true ? "Yes" : "No"}
            </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">
              Site Visit Availability :
            </span>
            <span className=" text-lg ">
              {" "}
              {Data?.siteVisitAvailability === true ? "Yes" : "No"}
            </span>
          </div>
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Nationality :</span>
            <span className=" text-lg "> {Data?.nationality} </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-1 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info "> Current Address :</span>
            <span className=" text-lg "> {Data?.currentAddress} </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-1 my-1">
          <div className="mt-3 mx-1 " id=" perticular">
            <span className=" text-xl text-info ">Permanent Address :</span>
            <span className=" text-lg "> {Data?.permanentAddress} </span>
          </div>
        </div>
        <div className=" grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-2 my-5">
          <div>
            <span className=" text-xl text-info ml-2 ">Pancard Image :</span>

            <img
              className=" border-info p-2 border-2 rounded m-2"
              width={500}
              src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/panImg/${Data?.panImg}`}
              alt={`pan card image of ${Data?.reporter.name}`}
            />
          </div>

          <div>
            <span className=" text-xl text-info ml-2 ">Adhar Card Image :</span>

            <img
              className=" border-info p-2 border-2 rounded m-2"
              width={500}
              src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/adharImg/${Data?.adharImg}`}
              alt={`adhar card image of ${Data?.reporter.name}`}
            />
          </div>
        </div>

        {"   "}
      </div>
    </div>
  );
};

export default IndividualExpert;
