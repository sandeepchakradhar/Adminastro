import { Image } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
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
          <Box className=" my-6">
            <NavLink style={navLinkStyles}  className="  h-5 w-10   mb-6 bg-success  rounded-sm text-info  hover:text-primary"  to="/Dashboard/Admins">
              Home
            </NavLink>
          </Box> 
          <Box >
            <NavLink  style={navLinkStyles}  className=" bg-success rounded-sm text-info  hover:text-primary"to="/Dashboard/Analytics">
              
                Dashboard
            
            </NavLink>
          </Box>
          <Box>
            <NavLink  to="/Dashboard/Users">
              
                Users
            
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/Dashboard/Experts">
              
                Experts
              
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/Dashboard/Callhistory">
              
                Conference History
            
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/Dashboard/Payout">
              
                Payout Requests
              
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/Dashboard/Banner">
              
                Banner
            
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/Dashboard/Language">
              
                Language
              
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/Dashboard/Recharge">
              
                Recharge
            
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/Dashboard/Specialization">
              
                Specialization
            
            </NavLink>
          </Box>

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
