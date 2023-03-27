import {  Button, Switch } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HeaderTwo from "../components/HeaderTwo";
import { ToastContainer, toast } from "react-toastify";

import {
  useGetNewsQuery,
  useActiveNewsByIdMutation,
} from "../services/profile";

import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { getToken } from "../services/LocalStorage";

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
const token = getToken("token");
const News = () => {
  const [count, setCount] = useState(0);

  const { data, isLoading } = useGetNewsQuery(token);

  const Mata = data?.slice(count, count + 5);
  console.log(Mata, "mata");
  console.log(isLoading);

  const [updateStatus] = useActiveNewsByIdMutation();
  console.log(data, "news");
  // for Switch
  // const [nobe, setNobe] = useState("");
  // console.log(nobe, "switch");

  const Loader = () => {
    if (isLoading === true) {
      return <CircularProgress />;
    }
  };

  const updateSwitch = async (valu, _id) => {
    console.log(valu, _id, "kaushdfigasif");
    const ram = data?.filter((e) => e._id === _id);
    console.log(ram);
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

  const increment = () => {
    //  if (!newData[count]) {
    //    newData.splice(count, 1, " ");
    //  }
    setCount(data?.length - 1 > count ? count + 5 : count);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 5 : 0);
  };

  return (
    <div>
      <ToastContainer />

      <HeaderTwo header={"News"} />
      <TableContainer className=" mt-2" component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Loader()}
              <StyledTableCell>Image/Video</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Created Date</StyledTableCell>
              <StyledTableCell align="right">Created Time</StyledTableCell>
              <StyledTableCell align="right">Updated At</StyledTableCell>
              <StyledTableCell align="right">View</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          {Mata?.map(
            ({
              category,
              description,
              createdAt,
              _id,
              updatedAt,
              video,
              status,
            }) => {
              return (
                <TableBody key={_id}>
                  <StyledTableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {/* <iframe
                        alt="video"
                        src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${video}`}
                      /> */}
                      {video.split(".")[1] === "mp4" ? (
                        <div
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <iframe
                          title="video"
                            alt="video"
                            src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${video}`}
                          />
                        </div>
                      ) : (
                        <div
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: 200,
                          }}
                        >
                          <img alt="img"
                            src={`https://pressvartaserver.umpteeninnovation.com/public/uploads/video/${video}`}
                          />
                        </div>
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {description?.slice(0 ,50)}
                    </StyledTableCell>
                    <StyledTableCell align="right">{category}</StyledTableCell>
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
                      <Link to={`NewsDetails/${_id}`}>
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

      {/*       
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
      )} */}
    </div>
  );
};

export default News;
