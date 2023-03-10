import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { useAdminChangePasswordMutation } from "../services/profile";
import { getToken } from "../services/LocalStorage";

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

const AdminTable = ({ data }) => {
  const token = getToken("token");
  const [chnagePassword, { isLoading }] = useAdminChangePasswordMutation();


  const change = async () => {
    // let value ={password}
    const res = await chnagePassword({ token });
    // console.log("Change");
  };
  // console.log(nobe, "switch");
  console.log(data,"datalnknknk")

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Created at</StyledTableCell>
            <StyledTableCell align="right">edit</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              {data?.user?.name}
            </StyledTableCell>
            <StyledTableCell align="right">
              {new Date(data?.user?.updatedAt)?.toDateString()}
            </StyledTableCell>
            <StyledTableCell align="right">
              <EditIcon />
            </StyledTableCell>
           
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
