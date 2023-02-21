import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

import Form1 from "./Form1";
import Form2 from "./Form2";
// import AddExpert from "./AddExpert";

const steps = ["Basic Details", "Personal Details", "Interview Information"];

const MultiStepper = () => {
  const [activeStep, setactiveStep] = useState(0);

  const handleBack = () => {
    setactiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setactiveStep(activeStep + 1);
  };
  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((e) => {
          return (
            <Step>
              <StepLabel>{e}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? <Form1 /> : <Form2 />}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          {" "}
          Back
        </Button>

        <Button  onClick={handleNext}> Next</Button>
      </Box>
    </Box>
  );
};

export default MultiStepper;
