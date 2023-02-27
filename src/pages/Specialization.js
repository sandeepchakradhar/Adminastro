import { Box, Button, Dialog } from "@mui/material";
import React from "react";
import AddSpecializationDialog from "../components/AddSpecializationDialog";
import HeaderTwo from "../components/HeaderTwo";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
  const [open, setOpen] = React.useState(false);
  const [specialization, setSpecialization] = React.useState("");
  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value);
  };

  console.log(specialization, "specialization");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <HeaderTwo header={"Specialization"} />
      <Box className=" float-right m-2">
        <Button
          onClick={() => {
            handleClickOpen();
          }}
        >
          Add Specialization
        </Button>
      </Box>

      {/* <AddSpecializationDialog open={open} handleClose={handleClose} /> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              {/* <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell> */}
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell> */}
                <StyledTableCell align="right">
                  <EditOutlinedIcon
                    className=" mx-2"
                    color="info"
                    // onClick={() => handleEdit(_id)}
                  />

                  <DeleteOutlineIcon
                    className=" mx-2"
                    color="primary"
                    // onClick={() => deleteLanguage({ token, _id })}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
                  <div className="relative mt-1 rounded-md shadow-sm">
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
          <Box>
            <Button2 name={"Add"} />
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
