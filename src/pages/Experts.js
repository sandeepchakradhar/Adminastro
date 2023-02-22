import { Avatar, Button, Switch } from "@mui/material";
import React, { useState } from "react";
import AddExpert from "../components/AddExpert";
// import ExpertFilterBy from "../components/ExpertFilterBy";
import HeaderTwo from "../components/HeaderTwo";
// import CustomizedTables from "../components/Tabels";
// import { useHelloQuery } from "../services/profile";
// import ExpertDetails from "./ExpertDetails";
import { useGetReportersQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";
import { Link, useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetAllReporterQuery } from "../services/profile";
import { Box } from "@mui/system";

//styling start//
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// styling End//

const Experts = () => {
  const token = getToken("token");
  console.log(token, "token");
  const { data } = useGetReportersQuery(token);
  console.log(data, "data");
  // for filter by

  const [nobe, setNobe] = useState("");
  console.log(nobe, "switch");

  const { data: data2 } = useGetAllReporterQuery();
  console.log(data2, "all reporters");

  const navigate = useNavigate();
  // const [open1, setOpen1] = React.useState(false);

  // const handleClickOpen1 = () => {
  //   setOpen1(true);
  // };

  // const handleClose1 = () => {
  //   setOpen1(false);
  // };

  // for Add Expert
  // const [open2, setOpen2] = React.useState(false);

  // const handleClickOpen2 = () => {
  //   setOpen2(true);
  // };

  // const handleClose2 = () => {
  //   setOpen2(false);
  // };

  return (
    <div>
      <HeaderTwo header={"Experts"} />
      <Box className=" float-right m-2">
        <Button
          
          onClick={() => {
            navigate("MultiStepper");
          }}
        >
          Add Expert
        </Button>
      </Box>
      <TableContainer className=" mt-2" component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Conatct</StyledTableCell>
              <StyledTableCell align="right">Date Of Birth</StyledTableCell>
              <StyledTableCell align="right">Member Since</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">View</StyledTableCell>
              <StyledTableCell align="right">Active</StyledTableCell>
            </TableRow>
          </TableHead>
          {data?.map(
            ({
              name,
              gender,
              createdAt,
              pimage,
              phonenumber,
              dateOfBirth,
              _id,
            }) => {
              return (
                <TableBody key={_id}>
                  <StyledTableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <Avatar
                        className=" "
                        sx={{ width: 60, height: 60 }}
                        alt="Sandeep"
                        src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/pimage/${pimage}`}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">{name}</StyledTableCell>
                    <StyledTableCell align="right">
                      {phonenumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {new Date(dateOfBirth).toDateString()}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {new Date(createdAt).toDateString()}
                    </StyledTableCell>
                    <StyledTableCell align="right">{gender}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Link to={`IndividualExpert/${_id}`}>
                        <Button>View</Button>
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Switch onChange={(e) => setNobe(e.target.value)} />
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              );
            }
          )}
        </Table>
      </TableContainer>

      {/* 
      <Button
        onClick={() => {
          handleClickOpen1();
        }}
      >
        Filter Expert
      </Button>
      <ExpertFilterBy open1={open1} handleClose1={handleClose1} />
*/}
    </div>
  );
};

export default Experts;
