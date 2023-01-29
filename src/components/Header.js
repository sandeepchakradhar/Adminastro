import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Header = () => {
  return <div>
    <div className=" border-b  border-secondary  h-20 w-144 bg-wite">
        
<Stack
  direction="column"
  justifyContent="space-evenly"
  alignItems="flex-end"
>
        <Button variant="text" className=" mt-3 ">LOGOUT</Button>
</Stack>
    </div>
  </div>;
};

export default Header;
