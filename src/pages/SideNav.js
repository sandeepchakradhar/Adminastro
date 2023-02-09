// import { Image } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
// import Button from "../components/Button";
import HumanIcon from "../components/HumanIcon";
import Avatar from "@mui/material/Avatar";

const SideNav = () => {
  // const buttonFunction = (e) => {
  //   console.log("first", e.target);
  // };
  // const buttonFunction1 = (e) => {
  //   console.log("first", e.target);
  // };
  // const buttonFunction2 = (e) => {
  //   console.log("first", e.target);
  // };
  // const buttonFunction3 = (e) => {
  //   console.log("first", e.target);
  // };
  // const buttonFunction4 = (e) => {
  //   console.log("first", e);
  // };

  // for button hover

  //  const ButtonStyle= {
  //   '&:hover': {
  //     backgroundColor: '#ffffff',
  //     boxShadow: 'none',
  //   },
  //   '&:active': {
  //     boxShadow: 'none',
  //     backgroundColor: '#3c52b2',
  //   },
  // }

  //  for active navlink

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "",
      color: isActive ? "white" : "",
      backgroundColor: isActive ? "red" : "",
    };
  };

  return (
    <div>
      <Container
        className="bg-error border border-secondary"
        sx={{ maxWidth: "220px", height: "800px" }}
      >
        <div className="mt-4 mb-8">
          <HumanIcon />
        </div>
        <div className=" flex mb-10">
          <div>
            <Avatar
              alt="Sandeep"
              src="https://media.licdn.com/dms/image/C4D03AQGTVuPCGh2c-w/profile-displayphoto-shrink_100_100/0/1650885404610?e=1680134400&v=beta&t=dU06dR-eGZGvBS5lcm7CoG9Q_1aNp1MAGGljv6jJN1s"
            />
          </div>
          <div className="ml-4">
            <Typography
              className="text-info"
              variant="caption"
              sx={{ display: "block" }}
            >
              Admin
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>Sandeep</Typography>
          </div>
        </div>

        <Stack
          direction="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={2}
        >
          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Admins"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Home
            </Box>
          </NavLink>

          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Analytics"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Dashboard
            </Box>
          </NavLink>

          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Users"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Users
            </Box>
          </NavLink>

          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Experts"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Experts
            </Box>
          </NavLink>

          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Callhistory"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Conference History
            </Box>
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Payout"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Payout Requests
            </Box>
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Banner"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Banner
            </Box>
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Language"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Language
            </Box>
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Recharge"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Recharge
            </Box>
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Specialization"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Specialization
            </Box>
          </NavLink>

          {/* <Box>
            <Button
              onClick={(e) => {
                buttonFunction4(e);
              }}
              color="info"
              variants="text"
            >
              Specialization
            </Button>
          </Box> */}
        </Stack>
      </Container>
    </div>
  );
};

export default SideNav;
