import React, { useEffect, useState } from "react";
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
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
  const [search, setSearch] = useState("");
  // const [result, setResult] = useState();

  console.log(search,"khsdifhisdfk  search")


//   if (data ) {
//  const newDatas = data?.filter(({user}) => user?.name.toLowerCase().includes(search))
//     console.log(newDatas, "history");
//   }

  const [count, setCount] = useState(0);

  const [Mata, setMata] = useState();
  // styling End//

  useEffect(() => {
    if (data) {
      const tata = data?.slice(count, count + 5);

      setMata(tata);
    }
  }, [data && count]);

  const Loader = () => {
    if (isLoading === true) {
      return <CircularProgress />;
    }
  };


  const increment = () => {
    //  if (!newData[count]) {
    //    newData.splice(count, 1, " ");
    //  }
    setCount(data?.length - 1 > count ? count + 5 : count);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 5 : 0);
  };

  const noResult = () => {
    let newData = data?.filter(({user}) => user?.name.toLowerCase().includes(search));
    return newData?.length;
  };

  const handleSearch = () => {
    const newData = data.filter(({user}) => user?.name.toLowerCase().includes(search));
    console.log(newData)
    setMata(newData);
    // setResult(search);
  };
  return (
    <div>
      <HeaderTwo header={"History"} />

      <Box className=" flex gap-10 m-5 ">
        <div className=" flex gap-5">
          <TextField
            value={search}
            id="search-bar"
            className="text"
            //   onInput={(e) => {
            //     setSearchQuery(e.target.value);
            //   }}
            onChange={(e) => setSearch(e.target.value)}
            label="Search User Name"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          <IconButton onClick={() => handleSearch()} aria-label="search">
            <SearchIcon className=" ml-1" />
          </IconButton>
          {/* 
          <Button onClick={handleClickOpen1} variant="outlined" color="info">
            <FilterListIcon className="text-info" />
            <span className="text-info ml-1"> Filter</span>
          </Button> */}
        </div>
        {/* <Button
          onClick={() => {
            navigate("MultiStepper");
          }}
        >
          Add Expert
        </Button> */}
      </Box>
      {search && noResult() === 0 ? (
        <h1 className=" ml-10 my-10">No Result Found</h1>
      ) : (
        ""
      )}
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
          {Mata?.map(
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
                      {user?.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {user?.phonenumber}
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

      <Box
        className=" m-3"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        {data?.length - 1 !== count ? (
          <Button sx={{ order: 2 }} variant="contained" onClick={increment}>
            next
          </Button>
        ) : (
          <Button
            sx={{ order: 2 }}
            disabled
            variant="contained"
            onClick={increment}
          >
            next
          </Button>
        )}
        {count !== 0 ? (
          <Button sx={{ order: 1 }} variant="contained" onClick={decrement}>
            previous
          </Button>
        ) : (
          <Button
            sx={{ order: 1 }}
            disabled
            variant="contained"
            onClick={decrement}
          >
            previous
          </Button>
        )}
      </Box>
    </div>
  );
};

export default ConferenceHistory;
