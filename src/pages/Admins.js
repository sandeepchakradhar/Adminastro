import React from "react";
import AdminTable from "../components/AdminTable";
import { useGetProfileQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";
import HeaderTwo from "../components/HeaderTwo";




const Admins = () => {

const token = getToken("token");
console.log(token,"token")
const {data}= useGetProfileQuery(token);
console.log(data,"token dat")
  return (
    <div>
      <HeaderTwo header={"Admin"}/>

      <AdminTable data={data} />
    </div>
  );
};

export default Admins;
