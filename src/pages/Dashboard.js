import { Box } from '@mui/material';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import SideNav from './SideNav';
const Dashboard = () => {
    return (
        <div className=' flex ' >
            <SideNav />

            <Outlet />
        </div>
    )
}

export default Dashboard