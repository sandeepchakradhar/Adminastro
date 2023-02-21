import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HeaderTwo from "../components/HeaderTwo";
import { useGetNewsQuery } from "../services/profile";

import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetAllReporterQuery } from "../services/profile";

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

const News = () => {
  const { data } = useGetNewsQuery();
  console.log(data, "news");

  return (
    <div>
      <HeaderTwo header={"News"} />
      {/* <TableContainer className=" mt-2" component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image/Video</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Created At</StyledTableCell>
              <StyledTableCell align="right">Created Time</StyledTableCell>
              <StyledTableCell align="right">Updated At</StyledTableCell>
              <StyledTableCell align="right">View</StyledTableCell>
            </TableRow>
          </TableHead>
          {data?.map(
            ({ category, description, createdAt, _id, updatedAt, video }) => {
              return (
                <TableBody key={_id}>
                  <StyledTableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <iframe
                        alt="video"
                        src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${video}`}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">{name}</StyledTableCell>
                    <StyledTableCell align="right">{category}</StyledTableCell>
                    <StyledTableCell align="right">
                      {new Date(dateOfBirth).toLocaleTimeString()}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {new Date(createdAt).toLocaleTimeString()}
                    </StyledTableCell>
                    <StyledTableCell align="right">{gender}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Link to={`IndividualExpert/${_id}`}>
                        <Button>View</Button>
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Switch onChange={(e) => setNobe(e.target.value)} />
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              );
            }
          )}
        </Table>
      </TableContainer> */}
      {data?.map(
        ({ category, description, createdAt, _id, updatedAt, video }) => {
          return (
            <div key={_id}>
              <Link
                className="  bg-success h-32 mt-5 ml-5 md:h-48  rounded-sm flex  md:gap-24 gap-40 mr-5 "
                to={`NewsDetails/${_id}`}
              >
                <div className="divs flex gap-10  ml-6 mt-8 ">
                  <iframe
                    alt="video"
                    src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${video}`}
                  />
                  <div className=" ">
                    <p className=" text-info">Category</p>
                    <h1 className=" text-2xl">{category}</h1>
                  </div>
                </div>
                <div className=" divs mt-8">
                  <p className=" text-info">Description</p>
                  <h1 className=" text-2xl">{description}</h1>
                </div>
                <div className=" divs mt-8">
                  <p className=" text-info">Created At</p>
                  <h1 className=" text-2xl">
                    {new Date(createdAt).toDateString()}
                  </h1>
                </div>
                <div className=" divs mt-8">
                  <p className=" text-info">Updated At</p>
                  <h1 className=" text-2xl">
                    {new Date(updatedAt).toDateString()}
                  </h1>
                </div>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default News;
