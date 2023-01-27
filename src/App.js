// import { Box, Button } from "@mui/material";
import "./App.css";
import AdminLogin from "./components/login/AdminLogin";
import Icons from "./components/Icons";
import Button2 from "./components/Button2";
import { Typography } from "@mui/material";
import Modals from "./components/Modals";
import DashboardBox from "./components/DashboardBox";
import { Routes, Route } from "react-router-dom";
import AlertDialogSlide from "./components/Dialogs";
import Experts from "./pages/Experts";
import Dashboard from "./pages/Dashboard";
import SideNav from "./pages/SideNav";
import Users from "./pages/Users";
import Home from "./pages/Home"


function App() {

  return (
    <div>

      {/* <Icons />
      <Button2 name={"cancel"} color={"primary"} />
      <Typography sx={{ color: "info" }} color="info">khsbdvfkj</Typography>

      <DashboardBox />
      <AlertDialogSlide
        contents={"Are you sure you want to change status? "}
        name1={"accept"}
        name2={"cancel"}
        color1={"primary"}
        color2={"danger"} />

      <Modals
        contents={"Are you sure you want to change status? "}
        name1={"accept"}
        name2={"cancel"}
        color1={"primary"}
        color2={"danger"} /> */}

      {/* <Route path="/AdminLogin" element={<AdminLogin />} /> */}

      {/* <Routes>
        <Route path="/" element={<AdminLogin />} />

        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="/Experts" element={<Experts />} />
          <Route path="/Users" element={<Users />} />

        </Route>
      </Routes> */}


      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="Dashboard" element={<Dashboard />}>
          <Route path="Experts" element={<Experts />} />
          <Route path="Users" element={<Users />} />
        </Route>
      </Routes>


    </div >
  );
}

export default App;
