// import { Image } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Button from "../components/Button";
// import HumanIcon from "../components/HumanIcon";
import Avatar from "@mui/material/Avatar";
import Image from "../assets/PressVartaIcon2(1).png";
import {
  useEditProfilePicMutation,
  useGetProfileQuery,
} from "../services/profile";
import { getToken } from "../services/LocalStorage";
import EditIcon from "@mui/icons-material/Edit";

const SideNav = () => {
  const [file, setFile] = useState();
  console.log(file,"uploaded Image")


  //  for active navlink

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "",
      color: isActive ? "white" : "",
      backgroundColor: isActive ? "red" : "",
    };
  };

  const token = getToken("token");

  const [updatePic] = useEditProfilePicMutation();
  const { data } = useGetProfileQuery(token);

  return (
    <div>
      <Container
        className="bg-error border border-secondary rounded-b-xl"
        sx={{ maxWidth: "220px" }}
      >
        <div className="mt-4 mb-8 ml-7">
          <img src={Image} height="70" width="70" alt="Press Varta" />
        </div>
        <div className=" flex mb-7">
          <div>
            <Avatar
              sx={{ width: 60, height: 60 }}
              alt="Admin"
              src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/pimage/${data?.user.pimage}`}
            />
            <Button className=" mt-1 -mb-5" component="label">
                <EditIcon></EditIcon>
                <input
                  type="file"
                  hidden
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </Button>
              
          </div>
          <div className="ml-4">
            <Typography
              className="text-info"
              variant="caption"
              sx={{ display: "block" }}
            >
              Admin
            </Typography>
            <Typography sx={{ fontWeight: "bold", width: 40 }}>
              {data?.user.name}{" "}
            </Typography>
          </div>
        </div>

        <Stack
          direction="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={1}
          className=" mb-3"
        >
          {/* <NavLink
            style={navLinkStyles}
            className="bg-success  rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Admins"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Home
            </Box>
          </NavLink> */}

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
          {/* <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Payout"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Payout Requests
            </Box>
          </NavLink> */}
          {/* <NavLink
            style={navLinkStyles}
            className=" bg-success rounded-lg text-info  hover:text-primary"
            to="/Dashboard/Banner"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              Banner
            </Box>
          </NavLink> */}
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
            to="/Dashboard/News"
          >
            <Box className=" pl-2 pt-3" sx={{ width: "165px", height: "50px" }}>
              News
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
