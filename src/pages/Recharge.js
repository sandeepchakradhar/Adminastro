//
import React from "react";
import AddRecharge from "../components/AddRecharge";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeaderTwo from "../components/HeaderTwo";

const Recharge = () => {
  return (
    <div>
      <HeaderTwo header={"Recharges"} />

      <div className="flex  gap-2">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: -1, md: -5 }}
            columns={{ xs: 3, sm: 8, md: 12 }}
          >
            {Array.from(Array(5)).map((_, index) => (
              <Grid xs={2} sm={4} md={4} key={index}>
                <div className=" m-2">
                  <AddRecharge />
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* <AddRecharge />

<AddRecharge />
<AddRecharge />
<AddRecharge />
<AddRecharge /> */}
      </div>
    </div>
  );
};

export default Recharge;
