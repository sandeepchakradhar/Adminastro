import React from "react";
import HumanIcon from "./HumanIcon";

const SideBar = () => {
  return (
    <div>
      <section className=" border border-warning bg-error w-56 ">
        <div className=" ml-5" >
          <HumanIcon sx={{ margin: " 10px" }} />
        </div>
      </section>
    </div>
  );
};

export default SideBar;
