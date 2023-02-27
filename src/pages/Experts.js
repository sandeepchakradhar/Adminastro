import { Avatar, Button, Switch } from "@mui/material";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import AddExpert from "../components/AddExpert";
// import ExpertFilterBy from "../components/ExpertFilterBy";
import HeaderTwo from "../components/HeaderTwo";
// import CustomizedTables from "../components/Tabels";
// import { useHelloQuery } from "../services/profile";
// import ExpertDetails from "./ExpertDetails";
import { useGetReportersQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  useGetAllReporterQuery,
  useActiveStausByIdMutation,
} from "../services/profile";
import { Box } from "@mui/system";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpertFilterBy from "../components/ExpertFilterBy";

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
  const [count, setCount] = useState(0);

  const token = getToken("token");

  const { data } = useGetReportersQuery(token);
  const [updateStatus] = useActiveStausByIdMutation();
  // console.log(data, "data");
  // for filter by

  const [nobe, setNobe] = useState("");
  console.log(nobe, "switch");

  const { data: data2, isLoading } = useGetAllReporterQuery(token);
  // console.log(data2, "all reporters");

  const Mata = data?.slice(count, count + 5);
  console.log(Mata);
  console.log(isLoading);
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

  const updateSwitch = async (valu, _id) => {
    console.log(valu, _id, "kaushdfigasif");
    const ram = data?.filter((e) => e._id === _id);

    if (ram[0].status === "pending") {
      let value = { ...ram[0], status: "active" };
      console.log(value, "value");
      const res = await updateStatus({ value, token, _id });
      if (res.data.status === "success") {
        toast(res.data.message);
      } else if (res.data.status === "failed") {
        toast(res.data.message);
      } else {
        toast("something went wrong");
      }
    }
    if (ram[0].status === "active") {
      let value = { ...ram[0], status: "pending" };
      console.log(value, "value");
      const res = await updateStatus({ value, token, _id });
      if (res.data.status === "success") {
        toast(res.data.message);
      } else if (res.data.status === "failed") {
        toast(res.data.message);
      } else {
        toast("something went wrong");
      }
    }
  };

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

  // for search query

  const [search, setSearch] = useState();
  console.log(search, "search1");

  //
  const noResult = () => {
    let newData = data?.filter((e) => e.name.toLowerCase().includes(search));
    console.log(newData, "new Data");
    return newData?.length;
  };

  //
  const [searching, setSearching] = useState();

  const handleSearch = () => {
    console.log("hbasdhb");
    const searchData = data?.filter((e) =>
      e.name.toLowerCase().includes(search)
    );
    setSearching(searchData);
    console.log(searchData, "search dat");
  };

  return (
    <div>
      <ToastContainer />
      <HeaderTwo header={"Experts"} />
      <Box className=" flex gap-10 m-5 ">
        <div className=" flex gap-5">
          <TextField
            id="search-bar"
            className="text"
            //   onInput={(e) => {
            //     setSearchQuery(e.target.value);
            //   }}
            onChange={(e) => setSearch(e.target.value)}
            label="Search Expert Name"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          <IconButton
            onClick={() => handleSearch()}
            type="submit"
            aria-label="search"
          >
            <SearchIcon className=" ml-1" />
          </IconButton>

          <Button variant="outlined" color="info">
            <FilterListIcon className="text-info" />
            <span className="text-info ml-1"> Filter</span>
          </Button>
        </div>
        <Button
          onClick={() => {
            navigate("MultiStepper");
          }}
        >
          Add Expert
        </Button>
      </Box>
      {search && noResult() === 0 ? (
        <h1 className=" ml-10 my-10">No Result Found</h1>
      ) : (
        ""
      )}

      {/* <ExpertFilterBy open1={open1} handleClose1={handleClose1}/> */}
      <TableContainer className=" mt-2" component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Loader()}
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
{
search? (searching?.map(({name,
  gender,
  createdAt,
  pimage,
  phonenumber,
  dateOfBirth,
  _id,
  status,})=>{
  return(
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
        <Switch
          checked={status === "active" ? true : false}
          inputProps={{ "aria-label": "controlled" }}
          onChange={(e) => updateSwitch(e.target.value, _id)}
        />
      </StyledTableCell>
    </StyledTableRow>
  </TableBody>
  )
})):
(
  Mata?.map(
    ({
      name,
      gender,
      createdAt,
      pimage,
      phonenumber,
      dateOfBirth,
      _id,
      status,
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
              <Switch
                checked={status === "active" ? true : false}
                inputProps={{ "aria-label": "controlled" }}
                onChange={(e) => updateSwitch(e.target.value, _id)}
              />
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      );
    }
  )
)

}
{/* 
          {Mata.map(
            ({
              name,
              gender,
              createdAt,
              pimage,
              phonenumber,
              dateOfBirth,
              _id,
              status,
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
                      <Switch
                        checked={status === "active" ? true : false}
                        inputProps={{ "aria-label": "controlled" }}
                        onChange={(e) => updateSwitch(e.target.value, _id)}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              );
            }
          )} */}
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
