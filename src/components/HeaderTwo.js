
import React from "react";
import "../components/Header.css";


const HeaderTwo = ({header}) => {


  return (
    <div>
      <div className=" border-b  border-secondary bg-wite  h-14 ">

        <h1 className=" mt-6 ml-9 text-2xl">{header}</h1>
{/*         
        <Button
          onClick={()=>handleLogout()}
          className=" float-right   "
          style={{ marginTop: "20px", marginRight: "25px" }}
          variant="text"
        >
          LOGOUT
        </Button> */}
      </div>
    </div>
  );
};

export default HeaderTwo;
