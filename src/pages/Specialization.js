import { Box, Button, Dialog } from "@mui/material";
import React, { useState,useEffect } from "react";
import AddSpecializationDialog from "../components/AddSpecializationDialog";
import HeaderTwo from "../components/HeaderTwo";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  useAddSpecializationMutation,
  useDeleteSpecializationByIdMutation,
  useEditSpecializationByIdMutation,
  useGetSpecializationQuery,
} from "../services/profile";

import { getToken } from "../services/LocalStorage";
//  for table
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button2 from "../components/Button2";

// for dialog box start
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
// for dialog box start

// style for table start
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
// style for table start

// fake Data
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Specialization = () => {
  
  const [ID, setID] = useState();
  const [NewSpec, setNewSpec] = useState();
  // apiii
  const token = getToken("token");

  const [addSpecialization] = useAddSpecializationMutation();

  const handleSubmit = async () => {
    console.log(specialization, "lankjbsdskb");

    const data = { specialization };
    const res = await addSpecialization({ data, token });
    console.log(res, "res");
  };
  //
  const { data: mata } = useGetSpecializationQuery();

  console.log(mata, "mataaaa");
  //
  const [deleteSpecialization] = useDeleteSpecializationByIdMutation();
  //
  const [editSpecialization] = useEditSpecializationByIdMutation();

  const [editSpec, setEditSpec] = useState(NewSpec);
  useEffect(() => {
    setEditSpec(NewSpec)
  }, [NewSpec])
  

  console.log(editSpec, "mjnnknkn");
  const handleEditSubmit = async () => {
    const value = { specialization: editSpec };
    const _id = ID;

    console.log(_id, editSpec, "ijijijiijioij");
    const res = await editSpecialization({ value, token, _id });
    console.log(res, "6546465464");
    if (res.data.status === "success") {
      console.log(res.data.message, "first");
    } else {
      console.log(res.data.message, "first");
    }
  };

  // set Specialization
  const [specialization, setSpecialization] = React.useState("");
  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value);
  };
  const handleEditChange = (event) => {
    setEditSpec(event.target.value);
  };

  console.log(specialization, "specialization");

  // to open Addspecialization

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // to open EditSpecialization
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleEdit = (_id, index) => {
    setID(_id);
    setNewSpec(mata[index].specialization);
    console.log("hhg", _id, mata[index].specialization);

    // handleClickOpen2(_id, specialization);
    // setEditSpec(specialization)
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <HeaderTwo header={"Specialization"} />

      {/* specialization table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Created Date</StyledTableCell>
              <StyledTableCell align="right">Created Time</StyledTableCell>
              <StyledTableCell align="right">Updated Date</StyledTableCell>
              <StyledTableCell align="right">Updated Time</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mata?.map(
              ({ specialization, createdAt, updatedAt, _id }, index) => (
                <StyledTableRow key={_id}>
                  <StyledTableCell component="th" scope="row">
                    {specialization}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(createdAt).toDateString()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(createdAt).toLocaleTimeString()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(updatedAt).toDateString()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(updatedAt).toLocaleTimeString()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <EditOutlinedIcon
                      className=" mx-2"
                      color="info"
                      onClick={() => handleEdit(_id, index)}
                    />

                    <DeleteOutlineIcon
                      className=" mx-2"
                      color="primary"
                      onClick={() => deleteSpecialization({ token, _id })}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className="  m-3">
        
        <Button
        variant="contained"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Add Specialization +
        </Button>
      </Box>
      {/* Add Specialization Dialog Box */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {"Add Specialization"}
        </DialogTitle>
        <DialogContent className=" my-5">
          <DialogContentText id="alert-dialog-description">
            <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={4}
            >
              <div className=" flex  gap-2">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <div className="relative mt-1 mr-10 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-xm text-xs">
                        {/* ₹{" "} */}
                      </span>
                    </div>
                    <input
                      value={specialization}
                      onChange={handleSpecializationChange}
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Title"
                    />
                  </div>
                </div>
              </div>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=" bg-danger">
          <Box>
            <Button2 handleClose={handleClose} color={"wite"} name={"Cancel"} />
          </Box>
          <Box onClick={handleSubmit}>
            <Button2 handleClose={handleClose} name={"Add"} />
          </Box>
        </DialogActions>
      </Dialog>

      {/* for edit Specialization Dialog box */}

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {"Edit Specialization"}
        </DialogTitle>
        <DialogContent className=" my-5">
          <DialogContentText id="alert-dialog-description">
            <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={4}
            >
              <div className=" flex  gap-2">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-xm text-xs">
                        {/* ₹{" "} */}
                      </span>
                    </div>
                    <input
                      value={editSpec}
                      onChange={(e) => setEditSpec(e.target.value)}
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border border-secondary pl-7 pr-12 mr-40 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="specialization"
                    />
                  </div>
                </div>
              </div>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=" bg-danger">
          <Box>
            <Button2
              handleClose={handleClose2}
              color={"wite"}
              name={"Cancel"}
            />
          </Box>
          <Box onClick={handleEditSubmit}>
            <Button2 handleClose={handleClose2} name={"Add"} />
          </Box>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Specialization;
