import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HeaderTwo from "../components/HeaderTwo";
import { useGetNewsQuery } from "../services/profile";

const News = () => {
  const { data } = useGetNewsQuery();
  console.log(data, "news");


  return (
    <div>
      <HeaderTwo header={"News"} />
{ data?.map(({category,description,createdAt,_id,gender,updatedAt})=>{
  return(
<div key={_id}>
        <Link className="  bg-success h-32 mt-5 ml-5 md:h-48  rounded-sm flex  md:gap-24 gap-40 mr-5 " to={`NewsDetails/${_id}`}>
          <div className="divs flex gap-10  ml-6 mt-8 ">
            <Avatar
              className=" "
              sx={{ width: 60, height: 60 }}
              alt="Sandeep"
              src="https://media.licdn.com/dms/image/C4D03AQGTVuPCGh2c-w/profile-displayphoto-shrink_100_100/0/1650885404610?e=1680134400&v=beta&t=dU06dR-eGZGvBS5lcm7CoG9Q_1aNp1MAGGljv6jJN1s"
            />
            <div className=" ">
              <p className=" text-info">Category</p>
              <h1 className=" text-2xl">{category}</h1>
            </div>
          </div>
          <div className=" divs mt-8">
            <p className=" text-info">Description</p>
            <h1 className=" text-2xl">{description}</h1>
          </div>
          <div className=" divs mt-8">
            <p className=" text-info">Created At</p>
            <h1 className=" text-2xl">{createdAt}</h1>
          </div>
          <div className=" divs mt-8">
            <p className=" text-info">Updated At</p>
            <h1 className=" text-2xl">{updatedAt}</h1>
          </div>
        </Link>
      </div> 

  )
})

       
}


    </div>
  );
};

export default News;
