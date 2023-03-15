import React, { useState } from "react";
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
import {
  useAdminChangePasswordMutation,
  useGetProfileQuery,
} from "../services/profile";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import Button2 from "../components/Button2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Container } from "@mui/system";
import { useForm } from "react-hook-form";

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
  console.log(data, "datalnknknk");
  const [pimage, setFile] = useState();
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDOBChange = (e) => {
    let lol = new Date(e).toDateString();
    console.log(new Date(e).toDateString(), "valu1");
    setDateOfBirth(lol);
    // var date = new Date(value1),
    //     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //     day = ("0" + date.getDate()).slice(-2);

    // setDateOfBirth( [date.getFullYear(), mnth, day].join("-"));

    // setValue1(newValue1);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HeaderTwo header={"Admin"} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Created at</StyledTableCell>
              <StyledTableCell sx={{ marginRight: 2 }} align="right">
                edit
              </StyledTableCell>
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
              <StyledTableCell sx={{ marginRight: 2 }} align="right">
                <IconButton onClick={handleClickOpen}>
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* edit prifile dialog box */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {"Edit Profile"}
        </DialogTitle>
        <DialogContent className=" my-5">
          <DialogContentText id="alert-dialog-description">
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
                  <div className="inputs mt-3 ">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <div className="">
                      <input
                        required
                        type="text"
                        className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Full Name"
                        {...register("name")}
                      />
                    </div>
                  </div>

                  <div className="inputs mt-3 ">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact
                    </label>
                    <div className="">
                      <input
                        required
                        maxLength={10}
                        type="tel"
                        className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Contact"
                        {...register("phonenumber")}
                      />
                    </div>
                  </div>
                  <div className="inputs mt-3  pl-5  ">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Upload Image
                    </label>

                    <Button component="label">
                      <EditIcon></EditIcon>
                      <input
                        type="file"
                        hidden
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </Button>
                    <span className="ml-2 text-primary">{pimage?.name}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
                  <div className="inputs mt-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <div className="">
                      <select
                        required
                        className="block py-2 text-sm w-44  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Gender"
                        {...register("gender", { required: true })}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="inputs mt-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date Of Birth
                    </label>
                    <div className="">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          inputFormat="DD/MM/YYYY"
                          value={dateOfBirth}
                          onChange={(e) => handleDOBChange(e)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              sx={{
                                ".MuiInputBase-input": {
                                  padding: 1,
                                  width: "110px",
                                },
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 mt-5">
                  <div className="inputs mt-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Id
                    </label>
                    <div className="">
                      <input
                        required
                        type="email"
                        className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email Id"
                        {...register("email")}
                      />
                    </div>
                  </div>
                  <div className="inputs mt-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Set Password
                    </label>
                    <div className="">
                      <input
                        required
                        type="text"
                        className="block py-2 text-sm  rounded-md border border-secondary pl-1 pr-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                        {...register("password")}
                      />
                    </div>
                  </div>
                </div>

                <Box className=" mt-2">
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </form>
            </Container>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions className=" bg-danger">
          <Box>
            <Button2 handleClose={handleClose} color={"wite"} name={"Cancel"} />
          </Box>
          <Box>
            <Button2 handleClose={handleClose} name={"Add"} />
          </Box>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default Admins;
