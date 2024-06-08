import { Box } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box mt={5} sx={{ display: {xs: "" }  }}>
      <h3>Hi there! I'm</h3>
      <h1>Jia</h1>
      <h2>FULL-STACK DEVELOPER | CLOUD ARCHITECT</h2>
      <button className="button-resume">Check out my resume</button>
    </Box>
  );
}

export default About;
