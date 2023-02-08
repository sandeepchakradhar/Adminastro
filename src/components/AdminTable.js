import  React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { Switch } from '@mui/material';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const  AdminTable=({data})=> {
  const [nobe, setNobe] = useState("")
  console.log(nobe,"switch")

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
            <StyledTableRow >
              
              <StyledTableCell component="th" scope="row" >{data?.user?.name}</StyledTableCell>
              <StyledTableCell align="right">{new Date(data?.user?.updatedAt)?.toDateString()}</StyledTableCell>
              <StyledTableCell align="right"><EditIcon/></StyledTableCell>
              <StyledTableCell align="right"> <Switch onChange={(e)=> setNobe(e.target.value)} /></StyledTableCell>
              
            
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminTable;