import React from "react";
import { useGetNewsByIdQuery } from "../services/profile";
import { useParams } from "react-router-dom";
import HeaderTwo from "./HeaderTwo";
import { Box } from "@mui/system";
const NewsDetails = () => {
  const { _id } = useParams();

  const { data } = useGetNewsByIdQuery(_id);
  console.log(data, "newsdea");
  console.log(_id, "idddd");
  console.log(data?.video);

  return (
    <div>
      <HeaderTwo header={"News Details"} />
      <div className=" bg-secondary w-full  gap-5">
        <div>
          <span className=" text-primary">Category : &nbsp;</span>
          <span>{data?.category}</span>
        </div>
        <div>
          <span>Created : </span>

          <span>{new Date(data?.createdAt).toLocaleTimeString()}</span>
        </div>
        <div className="">
          <span>Description :</span>
          
          <span>{data?.description}</span>
        </div>

      </div>
     <div className=" bg-secondary float-right">

        <Box className=" m-6">
          <iframe
            width="500"
            height="350"
            allowFullScreen
            allow="accelerometer,autoplay; encrypted-media; gyroscope; picture-in-picture"
            src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${data?.video}`}
            frameborder="0"
            >
            {" "}
            video
          </iframe>
        </Box>
            </div>
    </div>
  );
};

export default NewsDetails;
