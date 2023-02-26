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

  const Loader = () => {
    if (isLoading === true) {
      return <CircularProgress />;
    }
  };

  return (
    <div>
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
          {Mata?.map(
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
                        <Button>View</Button>
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
