import Button from "@mui/material/Button";
import React from "react";
import AddLanguage from "../components/AddLanguage";
import HeaderTwo from "../components/HeaderTwo";
import {
  useGetLanguageQuery,
  useDeleteLanguageByIdMutation,
} from "../services/profile";
import { getToken } from "../services/LocalStorage";
import EditLanguage from "../components/EditLanguage";
import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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

const Language = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [handleId, sethandleId] = React.useState("");
  const [lang, setlang] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = (_id, language) => {
    setOpen2(true);
    sethandleId(_id);

    const newData = data.map((e) => {
      if (e._id === _id) {
        setlang(e.language);
      }
    });
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const token = getToken("token");

  const { data } = useGetLanguageQuery();
  const [deleteLanguage] = useDeleteLanguageByIdMutation();

  console.log(data, "added language");

  const handleEdit = (_id, language) => {
    handleClickOpen2(_id, language);
  };
  // const handleDelete = (_id) => {
  //   const Data = _id;
  //   deleteLanguage({ token, Data });
  // };
  console.log(lang, "jifdisdfisdfb");
  return (
    <div>
      <HeaderTwo header={"Languages"} />

      <TableContainer className=" mt-2" component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Created Date</StyledTableCell>
              <StyledTableCell align="right">Created Time</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          {data?.map(({ _id, language, createdAt }) => {
            return (
              <TableBody>
                <StyledTableRow
                  key={_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {language}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(createdAt).toDateString()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(createdAt).toLocaleTimeString()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <EditOutlinedIcon
                      className=" mx-2"
                      color="info"
                      onClick={() => handleEdit(_id)}
                    />

                    <DeleteOutlineIcon
                      className=" mx-2"
                      color="primary"
                      onClick={() => deleteLanguage({ token, _id })}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>

      <br />
      <Box className=" m-3">
        To Add Language Click Here <br />
        <Button
          onClick={() => {
            handleClickOpen();
          }}
        >
          Add Language
        </Button>
      </Box>
      <EditLanguage
        name={"Edit Language"}
        open2={open2}
        handleId={handleId}
        lang={lang}
        handleClose2={handleClose2}
      />
      <AddLanguage
        name={"ADD Language"}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Language;

{
  /* <Button onClick={handleEdit}>Edit</Button>

<Button onClick={()=> deleteLanguage({ token, _id}) }>Delete</Button> */
}
