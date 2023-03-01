import { Avatar, Button, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
// import BasicTabs from "./BasicTabs";
import CircularProgress from "@mui/material/CircularProgress";

import { Link } from "react-router-dom";
import {
  useGetUsersQuery,
  useActiveStausByIdMutation,
} from "../services/profile";
import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getToken } from "../services/LocalStorage";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem, Select, Stack } from "@mui/material";
import Button2 from "../components/Button2";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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

const UserDetails = () => {
  const [count, setCount] = useState(0);

  const token = getToken("token");
  const [checked, setChecked] = useState(true);

  const { data, isLoading } = useGetUsersQuery(token);
  const [updateStatus] = useActiveStausByIdMutation();
  // console.log(data, "data");

  const [Mata, setMata] = useState();
  // styling End//
  useEffect(() => {
    if (data) {
      setMata(data);
    }
  }, [data]);
  // console.log(Mata, "mata");

  const [on, setOn] = useState(false);

  console.log(on, "on");
  const updateSwitch = async (e, id) => {
    const ram = Mata?.filter((e) => e._id === id);
    console.log(ram, "ram");
    if (ram[0]?.status === "pending") {
      let value = { ...ram[0], status: "active" };

      const res = await updateStatus({ value, token, _id: id });
      console.log(res);
      const raja = Mata?.map((e, index) => (e._id !== id ? e : value));
      console.log(raja, "raja");
      setMata(raja);
    } else {
      setOn(!on);
      const value = { ...ram[0], status: "pending" };
      const res = await updateStatus({ value, token, _id: id });
      console.log(res);
      const raja2 = Mata?.map((e, index) => (e._id !== id ? e : value));
      setMata(raja2);
      console.log(raja2, "raja2");
    }

    // ternary
    // ram[0]?.status == "active"?
    //       const raja = data?.map((e, index) => (e._id !== id ? e : u));

    // console.log(ram)
    //   ram?.map(({_id,status})=>{
    //     if (_id==id && status=="active") {
    //       setOn(!on)
    //       console.log("run")

    //     }
    // })

    // console.log(_id,"iuasdfiasdnfni")
  };

  //  for dialog states start

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  // for from Date
  const [value1, setValue1] = React.useState(dayjs(""));

  const handleDateOneChange = (newValue1) => {
    setValue1(newValue1);
  };
  // for to Date
  const [value2, setValue2] = React.useState(dayjs(""));

  const handleDateTwoChange = (newValue2) => {
    setValue2(newValue2);
  };

  // For age
  const [age, setAge] = React.useState("");
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  // For gender
  const [gender, setGender] = React.useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  // For status
  const [status, setStatus] = React.useState("");
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  console.log(value1.$d, "first");

  function convert1(value1) {
    var date = new Date(value1),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  function convert2(value2) {
    var date = new Date(value2),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  console.log(convert1(value1), " date from");
  console.log(convert2(value2), "Date to");
  console.log(age, "age");
  console.log(status, "status");
  console.log(gender, "gender");
  //  for dialog states end

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

  const [search, setSearch] = useState("");
  console.log(search, "search");

  //
  const noResult = () => {
    let newData = Mata?.filter((e) => e.name.toLowerCase().includes(search));
    console.log(newData, "new Data");
    return newData?.length;
  };

  console.log(noResult());
  return (
    <div>
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
          <IconButton type="submit" aria-label="search">
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
      {/* user Filter dialog box open */}
      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {"Filter By"}
        </DialogTitle>
        <DialogContent className=" my-5">
          <DialogContentText id="alert-dialog-description">
            <Stack
              className=" "
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={4}
            >
              <div className="   gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <label
                    htmlFor="demo-simple-select-label"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <div className="relative mt-1 rounded-md  shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <Select
                      className=" w-40 h-11"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleAgeChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="demo-simple-select-label"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <Select
                      className=" w-40 h-11"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={gender}
                      label="Gender"
                      onChange={handleGenderChange}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Others</MenuItem>
                    </Select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="demo-simple-select-label"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <Select
                      className=" w-40  h-11"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Age"
                      onChange={handleStatusChange}
                    >
                      <MenuItem value={"Active"}>Active</MenuItem>
                      <MenuItem value={"Inactive"}>Inactive</MenuItem>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <label className="block text-sm font-medium text-gray-700">
                  Member Since
                </label>
              </div>
              <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    From
                  </label>
                  <div>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          inputFormat="DD/MM/YYYY"
                          value={value1}
                          onChange={handleDateOneChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              sx={{ ".MuiInputBase-input": { padding: 1 } }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    To
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        inputFormat="DD/MM/YYYY"
                        value={value2}
                        onChange={handleDateTwoChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{ ".MuiInputBase-input": { padding: 1 } }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=" bg-danger">
          <Box>
            <Button2
              handleClose={handleClose1}
              color={"wite"}
              name={"Cancel"}
            />
          </Box>
          <Box>
            <Button2 name={"Add"} />
          </Box>
        </DialogActions>
      </Dialog>
      {/* user Filter dialog box close */}
      {noResult() === 0 ? <h1 className=" ml-10 my-10">No Result Found</h1> : ""}
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
          {Mata?.filter((e) => e.name.toLowerCase().includes(search)).map(
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
                <TableBody>
                  <StyledTableRow
                    key={_id}
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
                      <Link to={`IndividualUser/${_id}`}>
                        <Button variant="contained">View</Button>
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {/* <FormControlLabel
                        control={
                          status == "active" ? (
                            <Switch
                              defaultChecked
                              onChange={(e) =>
                                updateSwitch(e.target.value, _id)
                              }
                            />
                          ) : (
                            <Switch
                              onChange={(e) =>
                                updateSwitch(e.target.value, _id)
                              }
                            />
                          )
                        }
                        label="Label"
                      /> */}

                      {/* 2nd switch */}

                      <Switch
                        checked={status === "active" ? true : false}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                        onChange={(e) => updateSwitch(e.target.value, _id)}
                      />
                    </StyledTableCell>
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
      {/* {data?.map(
        ({ name, gender, pimage, phonenumber, dateOfBirth, _id }) => {
          return (
            <div
              key={_id}
              
            >
              <Link className="  bg-success h-32 mt-5 ml-5 md:h-48  rounded-sm flex  md:gap-24 gap-40 mr-5 "  to={`IndividualUser/${_id}`} >
                <div className="divs flex gap-10  ml-6 mt-8 ">
                  <Avatar
                    className=" "
                    sx={{ width: 60, height: 60 }}
                    alt="Sandeep"
                    src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/pimage/${pimage}`}

                  />
                  <div className=" ">
                    <p className=" text-info">Name</p>
                    <h1 className=" text-2xl">{name}</h1>
                  </div>
                </div>
                <div className=" divs mt-8">
                  <p className=" text-info">Contact</p>
                  <h1 className=" text-2xl">{phonenumber}</h1>
                </div>
                <div className=" divs mt-8">
                  <p className=" text-info">Date Of Birth</p>
                  <h1 className=" text-2xl">{new Date(dateOfBirth).toDateString()}</h1>
                </div>
                <div className=" divs mt-8">
                  <p className=" text-info">Gender</p>
                  <h1 className=" text-2xl">{gender}</h1>
                </div>
              </Link>
            </div>
          );
        }
      )} */}
    </div>
  );
};

export default UserDetails;
