import { Image } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
// import Button from "../components/Button";
import HumanIcon from "../components/HumanIcon";
import Avatar from "@mui/material/Avatar";

const SideNav = () => {
  const buttonFunction = (e) => {
    console.log("first", e.target);
  };
  const buttonFunction1 = (e) => {
    console.log("first", e.target);
  };
  const buttonFunction2 = (e) => {
    console.log("first", e.target);
  };
  const buttonFunction3 = (e) => {
    console.log("first", e.target);
  };
  const buttonFunction4 = (e) => {
    console.log("first", e);
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
          <Box>
            <Link to="/">
              <Button variants="text"> Home</Button>
            </Link>
          </Box>
          <Box>
            <Link to="/Dashboard/Users">
              <Button color="info" variants="text">
                Users
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/Dashboard/Experts">
              <Button color="info" variants="text">
                Experts
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              onClick={(e) => {
                buttonFunction2(e);
              }}
              to="/Dashboard/Experts"
            >
              <Button color="info" variants="text">
                Call History
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              onClick={(e) => {
                buttonFunction3(e);
              }}
              to="/Dashboard/Payout"
            >
              <Button color="info" variants="text">
                Payout Requests
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              onClick={(e) => {
                buttonFunction3(e);
              }}
              to="/Dashboard/Banner"
            >
              <Button color="info" variants="text">
                Banner
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              onClick={(e) => {
                buttonFunction3(e);
              }}
              to="/Dashboard/Language"
            >
              <Button color="info" variants="text">
                Language
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              onClick={(e) => {
                buttonFunction3(e);
              }}
              to="/Dashboard/Recharge"
            >
              <Button color="info" variants="text">
                Recharge
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              onClick={(e) => {
                buttonFunction3(e);
              }}
              to="/Dashboard/Specialization"
            >
              <Button color="info" variants="text">
                Specialization
              </Button>
            </Link>
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
