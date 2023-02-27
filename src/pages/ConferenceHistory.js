import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import { useGetConferenceQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";

import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress, Switch } from "@mui/material";

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

const ConferenceHistory = () => {
  const token = getToken("token");
  const { data, isLoading } = useGetConferenceQuery(token);
  console.log(data, "history");

  const Loader = () => {
    if (isLoading === true) {
      return <CircularProgress />;
    }
  };
  return (
    <div>
      <HeaderTwo header={"History"} />
      {Loader()}
      <TableContainer className=" mt-2" component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Requested By </StyledTableCell>
              <StyledTableCell align="right">Contact </StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
              <StyledTableCell align="right">Date </StyledTableCell>
              <StyledTableCell align="right">Time </StyledTableCell>
              <StyledTableCell align="right">No. of Reporters</StyledTableCell>
              <StyledTableCell align="right">Payment</StyledTableCell>
            </TableRow>
          </TableHead>
          {data?.map(
            ({
              DateOfConfrence,
              location,
              payment,
              numberOfReporters,
              time,
              user,
              _id,
            }) => {
              return (
                <TableBody key={_id}>
                  <StyledTableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {user.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {user.phonenumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">{location}</StyledTableCell>
                    <StyledTableCell align="right">
                      {new Date(DateOfConfrence).toDateString()}
                    </StyledTableCell>
                    <StyledTableCell align="right">{time}</StyledTableCell>
                    <StyledTableCell align="right">
                      {numberOfReporters}
                    </StyledTableCell>
                    <StyledTableCell align="right">{payment}</StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              );
            }
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default ConferenceHistory;
