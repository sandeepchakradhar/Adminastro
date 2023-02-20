import React from "react";
import { useGetNewsByIdQuery } from "../services/profile";
import { useParams } from "react-router-dom";
const NewsDetails = () => {
  const { _id } = useParams();

  const { data } = useGetNewsByIdQuery(_id);
  console.log(data, "newsdea");
  console.log(_id, "idddd");
  console.log(data?.video);

  return (
    <div>
      {/* <iframe
       width="500"
       height="350"
       allowFullScreen
       allow="accelerometer,autoplay; encrypted-media; gyroscope; picture-in-picture"
        src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${data?.video}`}

        frameborder="0"
      ></iframe> */}

      <div className=" bg-secondary w-full flex gap-5">
        <div className="">
          <p>Description</p>
          <br />
          <p>{data?.description}</p>
        </div>
        <div>{data?.category}</div>
        <div>
          <p>Created At</p>
          <br />
          <p>{new Date(data?.createdAt).toDateString()}</p>
        </div>
        <div className="video">
          <video width="400" height="300" controls>
            <source
              src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${data?.video}`}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
