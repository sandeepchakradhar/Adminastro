import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideNav from "./SideNav";
import Header from "../components/Header";

import "../components/Header.css";

const Dashboard = () => {
  return (
    <>
      <div className=" flex ">
        <SideNav />

        {/* <AlertDialogSlide
        contents={"Are you sure you want to change status? "}
        name1={"accept"}
        name2={"cancel"}
        color1={"primary"}
    color2={"wite"} /> */}

        <div className="header">
          <Header />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
