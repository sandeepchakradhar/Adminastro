import React from "react";
import AnalyticsCard from "../components/AnalyticsCard";

const Analytics = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnalyticsCard
          number={"100"}
          icon={"EmojiPeopleIcon"}
          name={"Reporters"}
        />
        <AnalyticsCard number={"100"} icon={"Groups2Icon"} name={"Users"} />
        <AnalyticsCard
          number={"100"}
          icon={"CurrencyRupeeIcon"}
          name={"Total Earnings"}
        />
        <AnalyticsCard
          number={"100"}
          icon={"TranslateIcon"}
          name={"Languages"}
        />
        <AnalyticsCard
          number={"100"}
          icon={"LocalPoliceIcon"}
          name={"Specialization"}
        />
        <AnalyticsCard
          number={"100"}
          icon={"ReportProblemIcon"}
          name={"Payout Request"}
        />
        <AnalyticsCard
          number={"100"}
          icon={"ReportProblemIcon"}
          name={"Reporter Type"}
        />
      </div>
    </div>
  );
};

export default Analytics;
