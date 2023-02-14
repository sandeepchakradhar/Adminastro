import React from "react";

const TransactionTab = () => {
  const date = new Date().toLocaleString();

  return (
    <div>
      <div className=" border border-gray rounded-sm flex gap-28  h-20">
        <div className="divs flex gap-5  ml-4 mt-4 ">
          <div className=" ">
            <h1 className="">1200 CREDITS</h1>

            <h1 className=" mt-1"> &nbsp; ₹ 500</h1>
          </div>
        </div>

        <div className=" mt-4 ">
          <span className=" text-info">Status:</span>
          <span className=" text-primary"> Balance Added </span>
        </div>
        <div className=" mt-4 ">
          <span className=" text-info">Date & Time:</span>
          <span> {date}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionTab;
