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

const Language = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };


  const token = getToken("token");

  const { data } = useGetLanguageQuery();
  const [deleteLanguage] = useDeleteLanguageByIdMutation();

  console.log(data, "added language");

  const handleEdit = () => {
    handleClickOpen2();
  };
  // const handleDelete = (_id) => {
  //   const Data = _id;
  //   deleteLanguage({ token, Data });
  // };
  return (
    <div>
      <HeaderTwo header={"Languages"} />
      {data?.map(({ _id, language, createdAt }) => {
        return (
          <div key={_id} className=" flex ">
            <div>{language}</div>
            <div>
              <Button onClick={handleEdit}>Edit</Button>
    
              <Button onClick={()=> deleteLanguage({ token, _id}) }>Delete</Button>
            </div>
          </div>
        );
      })}

      <Button
        onClick={() => {
          handleClickOpen();
        }}
      >
        Add Language
      </Button>
      <EditLanguage
        name={"Edit Language"}
        open2={open2}
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
