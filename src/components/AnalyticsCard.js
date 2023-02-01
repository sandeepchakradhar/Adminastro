import React, { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Groups2Icon from "@mui/icons-material/Groups2";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TranslateIcon from "@mui/icons-material/Translate";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const AnalyticsCard = (props) => {
  const iconComponent = () => {
    switch (props.icon) {
      case "Groups2Icon":
        return (
          <Groups2Icon className=" mt-8 ml-5 text-primary " fontSize="large" />
        );
        break;
      case "EmojiPeopleIcon":
        return (
          <EmojiPeopleIcon
            className=" mt-8 ml-5 text-primary "
            fontSize="large"
          />
        );
        break;
      case "CurrencyRupeeIcon":
        return (
          <CurrencyRupeeIcon
            className=" mt-8 ml-5 text-primary "
            fontSize="large"
          />
        );
        break;
      case "TranslateIcon":
        return (
          <TranslateIcon
            className=" mt-8 ml-5 text-primary "
            fontSize="large"
          />
        );
        break;
      case "LocalPoliceIcon":
        return (
          <LocalPoliceIcon
            className=" mt-8 ml-5 text-primary "
            fontSize="large"
          />
        );
        break;

      case "ReportProblemIcon":
        return (
          <ReportProblemIcon
            className=" mt-8 ml-5 text-primary "
            fontSize="large"
          />
        );
        break;

      default:
        return (
          <EmojiPeopleIcon
            className=" mt-8 ml-5 text-primary "
            fontSize="large"
          />
        );
        break;
    }
  };
  return (
    <Card className="mt-2 ml-2" sx={{ width: 260, height: 100 }}>
      <CardContent className=" bg-success">
        <div className="flex">
          <div
            className=" w-20  h-28 bg-wite "
            style={{ marginTop: "-16px", marginLeft: "-15px" }}
          >
            {/* <EmojiPeopleIcon className=" mt-8 ml-5 text-primary "  fontSize="large"/> */}
            {iconComponent()}
          </div>
          <div className=" pl-3">
            <h1 className=" text-info pb-3 text-xl ">{props.name}</h1>
            <h4 className=" text-lg"> {props.number}</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default AnalyticsCard;

// <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
