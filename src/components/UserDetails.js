import { Avatar} from "@mui/material";
import React from "react";
// import BasicTabs from "./BasicTabs";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../services/profile";

const UserDetails = () => {
  const { data } = useGetUsersQuery();
  console.log(data, "data");

  return (
    <div>
      {data?.map(
        ({ name, email, gender, pimage, phonenumber, dateOfBirth, _id }) => {
          return (
            <div
              key={_id}
              
            >
              <Link className="  bg-success h-32 mt-5 ml-5 md:h-48  rounded-sm flex  md:gap-24 gap-40 mr-5 "  to={`IndividualUser/${_id}`} >
                <div className="divs flex gap-10  ml-6 mt-8 ">
                  <Avatar
                    className=" "
                    sx={{ width: 60, height: 60 }}
                    alt="Sandeep"
                    src="https://media.licdn.com/dms/image/C4D03AQGTVuPCGh2c-w/profile-displayphoto-shrink_100_100/0/1650885404610?e=1680134400&v=beta&t=dU06dR-eGZGvBS5lcm7CoG9Q_1aNp1MAGGljv6jJN1s"
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
                  <h1 className=" text-2xl">{dateOfBirth}</h1>
                </div>
                <div className=" divs mt-8">
                  <p className=" text-info">Gender</p>
                  <h1 className=" text-2xl">{gender}</h1>
                </div>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default UserDetails;
