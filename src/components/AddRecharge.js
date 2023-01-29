// // import React from "react";
// // import Button from '@mui/material/Button';
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';

// // const AddRecharge = () => {
// //     const [open, setOpen] = React.useState(false);

// //     const handleClickOpen = () => {
// //       setOpen(true);
// //     };

// //     const handleClose = () => {
// //       setOpen(false);
// //     };

// //   return <div>
// //     <Button variant="outlined" onClick={handleClickOpen}>
// //         Open alert dialog
// //       </Button>
// //       <Dialog
// //         open={open}
// //         onClose={handleClose}
// //         aria-labelledby="alert-dialog-title"
// //         aria-describedby="alert-dialog-description"
// //       >
// //         <DialogTitle id="alert-dialog-title">
// //           {"Use Google's location service?"}
// //         </DialogTitle>
// //         <DialogContent>
// //           <DialogContentText id="alert-dialog-description">
// //             Let Google help apps determine location. This means sending anonymous
// //             location data to Google, even when no apps are running.
// //           </DialogContentText>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose}>Disagree</Button>
// //           <Button onClick={handleClose} autoFocus>
// //             Agree
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //   </div>;
// // };

// // export default AddRecharge;

// import React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";

// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import AddRecharge from "../components/AddRecharge";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { Stack, TextField } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";
// import { Box } from "@mui/system";
// import Button2 from "../components/Button2";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const AddRecharge = () => {

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       {/* {expanded ? <AddRecharge /> : console.log("jhj")} */}

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle className=" bg-danger" id="alert-dialog-title">{"Add Recharge"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             <Stack
//               direction="column"
//               justifyContent="space-evenly"
//               alignItems="flex-start"
//               spacing={4}
//             >
//               <div className=" flex gap-2">
//                 <div>
//                   <label
//                     for="price"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Amount
//                   </label>
//                   <div className="relative mt-1 rounded-md shadow-sm">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                       <span className="text-gray-500 sm:text-xm text-xs">
//                         ₹{" "}
//                       </span>
//                     </div>
//                     <input
//                       type="text"
//                       name="price"
//                       id="price"
//                       className="block py-2 text-sm w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                       placeholder="0.00"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     for="price"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Amount
//                   </label>
//                   <div className="relative mt-1 rounded-md shadow-sm">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                       <span className="text-gray-500 sm:text-xm text-xs">
//                         ₹{" "}
//                       </span>
//                     </div>
//                     <input
//                       type="text"
//                       name="price"
//                       id="price"
//                       className="block py-2 text-sm w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                       placeholder="0.00"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label
//                   for="price"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Offer text (optional)
//                 </label>
//                 <div className="relative mt-1 rounded-md shadow-sm">
//                   <input
//                     type="text"
//                     name="price"
//                     id="price"
//                     className="block w-full py-2 text-sm rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     placeholder="10%"
//                   />
//                 </div>
//               </div>
//               <div className="flex">
//                 <Checkbox {...label} />
//                 <span className="mt-3"> Recomended</span>
//               </div>
//             </Stack>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions className=" bg-danger">
//           <Box >
//             <Button2 color={"wite"} name={"Cancel"} />
//           </Box>
//           <Box>
//             <Button2 name={"Add"} />
//           </Box>
//           {/* <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button> */}
//         </DialogActions>
//       </Dialog>

//       <Card sx={{ width: "220px", height: "140px" }}>
//         <CardHeader
//           className=" text-primary"
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon
//                 onClick={() => {
//                   handleClickOpen();
//                 }}
//               />
//             </IconButton>
//           }
//           title="500 credits"
//         />

//         <CardContent className=" flex">
//           <CurrencyRupeeIcon className=" mt-1" />
//           <h6 className=" ml-2 text-2xl font-bold ">500</h6>
//         </CardContent>
//         <CardActions disableSpacing></CardActions>
//       </Card>
//     </div>
//   );
// };

// export default AddRecharge;

import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import Button2 from "../components/Button2";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const AddRecharge = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className=" bg-danger" id="alert-dialog-title">
          {"Add Recharge"}
        </DialogTitle>
        <DialogContent className=" my-5">
          <DialogContentText id="alert-dialog-description">
            <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={4}
            >
              <div className=" flex gap-2">
                <div>
                  <label
                    for="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-xm text-xs">
                        ₹{" "}
                      </span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-xm text-xs">
                        ₹{" "}
                      </span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2 text-sm w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  for="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Offer text (optional)
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full py-2 text-sm rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="10%"
                  />
                </div>
              </div>
              <div className="flex">
                <Checkbox {...label} />
                <span className="mt-3"> Recomended</span>
              </div>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=" bg-danger">
          <Box>
            <Button2 color={"wite"} name={"Cancel"} />
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

      <Card sx={{ width: "220px", height: "140px" }}>
        <div className=" bg-success">
          <CardHeader
            className=" text-primary"
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon
                  onClick={() => {
                    handleClickOpen();
                  }}
                />
              </IconButton>
            }
            title="500 credits"
          />

          <CardContent className=" flex">
            <CurrencyRupeeIcon className=" mt-1" />
            <h6 className=" ml-2 text-2xl font-bold ">500</h6>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </div>
      </Card>
    </div>
  );
};

export default AddRecharge;
