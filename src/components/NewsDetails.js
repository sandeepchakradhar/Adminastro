import React from "react";
import { useGetNewsByIdQuery } from "../services/profile";
import { useParams } from "react-router-dom";
import HeaderTwo from "./HeaderTwo";
import { Box } from "@mui/system";
import { getToken } from "../services/LocalStorage";

const NewsDetails = () => {
  const { _id } = useParams();
  const token = getToken("token");

  const { data } = useGetNewsByIdQuery({ token, _id });
  console.log(data, "newsdea");
  console.log(_id, "idddd");
  console.log(data?.video);

  return (
    <div>
      <HeaderTwo header={"News Details"} />
      <div className=" grid lg:grid-cols-2  w-full  gap-10 ml-3 mt-2">
        <div className=" div2">
          <div className="my-1">
            <span className=" text-primary">Created By : &nbsp;</span>
            <span>{data?.user.name}</span>
          </div>
          <div className="my-1">
            <span className=" text-primary">Category : &nbsp;</span>
            <span>{data?.category}</span>
          </div>
          <div className="my-1">
            <span className=" text-primary">Created Date : </span>

            <span>{new Date(data?.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="my-1">
            <span className=" text-primary">Created Time : </span>

            <span>{new Date(data?.createdAt).toLocaleTimeString()}</span>
          </div>
          <div className="my-1">
            <span className=" text-primary">Description :</span>

            <span className=" leading-7">{data?.description}</span>
          </div>
        </div>

        <div className=" float-right">
          <Box className="">
            {data?.video.split(".")[1] == "mp4" ? (
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  height="350"
                  allowFullScreen
                  allow="accelerometer,autoplay; encrypted-media; gyroscope; picture-in-picture"
                  alt="video"
                  src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${data?.video}`}
                />
              </div>
            ) : (
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 500,
                }}
              >
                <img
                  src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${data?.video}`}
                />
              </div>
            )}

            {/* <iframe
            width="500"
            height="350"
            allowFullScreen
            allow="accelerometer,autoplay; encrypted-media; gyroscope; picture-in-picture"
            src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${data?.video}`}
            frameborder="0"
          >
            {" "}
            video
          </iframe> */}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
