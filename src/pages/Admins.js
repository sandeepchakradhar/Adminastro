import React from "react";
import { getToken } from "../services/LocalStorage";
import HeaderTwo from "../components/HeaderTwo";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { useAdminChangePasswordMutation , useGetProfileQuery} from "../services/profile";

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
// import Review from "../components/Review";

const Admins = () => {
  const token = getToken("token");
  console.log(token, "token");
  const { data } = useGetProfileQuery(token);
  console.log(data, "token dat");


  const [chnagePassword, { isLoading }] = useAdminChangePasswordMutation();


  const change = async () => {
    // let value ={password}
    const res = await chnagePassword({ token });
    // console.log("Change");
  };
  // console.log(nobe, "switch");
  console.log(data,"datalnknknk")

  return (
    <div>
      <HeaderTwo header={"Admin"} />

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Created at</StyledTableCell>
            <StyledTableCell sx={{marginRight:2}} align="right">edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              {data?.user?.name}
            </StyledTableCell>
            <StyledTableCell align="right">
              {new Date(data?.user?.createdAt)?.toDateString()}
            </StyledTableCell>
            <StyledTableCell sx={{marginRight:2}} align="right">
              <EditIcon />
            </StyledTableCell>
           
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Admins;
