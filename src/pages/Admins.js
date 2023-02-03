import React from "react";
import AdminTable from "../components/AdminTable";
import { useGetProfileQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";




const Admins = () => {

const token = getToken("token");
console.log(token,"token")
const {data}= useGetProfileQuery(token);
console.log(data,"token dat")
  return (
    <div>
      <AdminTable data={data} />
    </div>
  );
};

export default Admins;
