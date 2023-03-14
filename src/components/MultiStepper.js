import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import Form1 from "./Form1";
import Form2 from "./Form2";
import HeaderTwo from "./HeaderTwo";
// import AddExpert from "./AddExpert";

const steps = ["Basic Details", "Personal Details"];

const MultiStepper = () => {
  const [activeStep, setactiveStep] = useState(0);

  const handleBack = () => {
    setactiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setactiveStep(activeStep + 1);
  };

  const { user: phonenumber } = useSelector((state) => state.user);
  console.log(
    phonenumber,
    Object.keys(phonenumber).length,
    "khjsdbiugsdfisdhih"
  );
  const [Length, setLength] = useState(0);
  useEffect(() => {
    setLength(Object.keys(phonenumber).length);

    if (Length == 10) {
      setactiveStep(activeStep + 1);
    }
  }, [phonenumber]);

  console.log(Length);

  return (
    <Box>
      <HeaderTwo header={"Add Expert"} />
      <Stepper activeStep={activeStep}>
        {steps.map((e, index) => {
          return (
            <Step key={index}>
              <StepLabel>{e}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? <Form1 /> : <Form2 />}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>

        <Button variant="contained" onClick={handleNext}>
          {Length == 10 ? "Next" : ""}
        </Button>

        {/* <Button onClick={handleNext}>Next</Button> */}
      </Box>
    </Box>
  );
};

export default MultiStepper;
