import React from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import HeaderTwo from "../components/HeaderTwo";
import { useGetDashBoardDataQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";
import CircularProgress from "@mui/material/CircularProgress";

const Analytics = () => {
  const token = getToken("token");
  console.log(token);

  const { data, isLoading } = useGetDashBoardDataQuery(token);
  console.log(data);

  return (
    <div className="container mx-auto">
      <HeaderTwo header={"Analytics"} />
      {isLoading === true ? (
        <CircularProgress />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnalyticsCard
            number={data?.reporterCount}
            icon={"EmojiPeopleIcon"}
            name={"Reporters"}
          />
          <AnalyticsCard
            number={data?.userCount}
            icon={"Groups2Icon"}
            name={"Users"}
          />
          <AnalyticsCard
            number={data?.userCount}
            icon={"CurrencyRupeeIcon"}
            name={"Total Earnings"}
          />
          <AnalyticsCard
            number={data?.languageCount}
            icon={"TranslateIcon"}
            name={"Languages"}
          />
          <AnalyticsCard
            number={"100"}
            icon={"LocalPoliceIcon"}
            name={"Specialization"}
          />
          <AnalyticsCard
            number={data?.newsCount}
            icon={"ReportProblemIcon"}
            name={"News"}
          />
          <AnalyticsCard
            number={data?.categoryCount}
            icon={"ReportProblemIcon"}
            name={"Reporter Type"}
          />
        </div>
      )}
    </div>
  );
};

export default Analytics;
