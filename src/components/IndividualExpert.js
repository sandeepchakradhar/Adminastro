import { Box } from "@mui/material";
import React from "react";
// import BasicTabs from "./BasicTabs";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { getToken } from "../services/LocalStorage";
import { useGetProfileByIdQuery } from "../services/profile";

const IndividualExpert = () => {
  const { _id } = useParams();
  console.log(_id, "ID");
  const token = getToken("token");
  console.log(token);
  const { data } = useGetProfileByIdQuery({ token, _id });
  console.log(data, "data");

  return (
    <div>
      {data?.name}

      <Box className=" ml-5 mt-2">
        {/* <BasicTabs data={data} /> */}
        IndividualExpert
      </Box>
    </div>
  );
};

export default IndividualExpert;
