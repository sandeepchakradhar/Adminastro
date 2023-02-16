import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import { useGetNewsQuery } from "../services/profile";

const News = () => {
  const {data} =  useGetNewsQuery();
  console.log(data,"news")
  return <div>
    <HeaderTwo header={"News"}/>
{/* 
{ data?.map(({})=>{
    return(
        
    )
})

} */}

  </div>;
};

export default News;
