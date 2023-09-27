import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import Card from "@mui/material/Card"; // Import the Card component

export default function AboutUs() {
  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      </Box>
      {/* Card Section */}
      <Card sx={{ marginTop: 2, padding: 2, margin: "0 auto", maxWidth: "900px" }}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h2">About Us</Typography>
        </div>
        <Typography component="body1" variant="body1" sx={{ textAlign: "center" }}>
          We are <span style={{ fontSize: "2.0em" }}>Ethical Pipeline</span> 
          . Our goal is to provide ethical insight on the pressing ethical issues of today using the power of AI generative text technology. With our website, users can get answers to their most pressing ethical problems instantly. We believe that this will lead to a more ethical world, where everyone considers the ethical implications of their decisions. We also believe that avoiding biases is crucial, so we have developed a way to provide multiple sides of every argument by filtering the responses into categories based on perspective: For, Neutral, and Against. 
          <br/>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: "1.5em" }}>Enjoy our website, and stay ethical!</span>
          </div>
        </Typography>
        </Card>
    </Container>
  );
}
