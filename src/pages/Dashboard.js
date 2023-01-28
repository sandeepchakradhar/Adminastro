import { Box } from '@mui/material';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import SideNav from './SideNav';
import AlertDialogSlide from '../components/Dialogs';
const Dashboard = () => {
    return (
        <div className=' flex ' >
            <SideNav className="  " />
            <AlertDialogSlide
        contents={"Are you sure you want to change status? "}
        name1={"accept"}
        name2={"cancel"}
        color1={"primary"}
        color2={"wite"} />

            <Outlet />
        </div>
    )
}

export default Dashboard