import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import { useGetConferenceQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";

const ConferenceHistory = () => {
  const token = getToken("token");
  const { data } = useGetConferenceQuery(token);
  console.log(data);
  return (
    <div>
      <HeaderTwo header={"History"} />
      ConferenceHistory
    </div>
  );
};

export default ConferenceHistory;
