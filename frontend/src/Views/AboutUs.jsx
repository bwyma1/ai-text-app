import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

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
        <Paper sx={{ p: 4, borderRadius: 2, backgroundColor: "#fff" }}>
          <Typography component="h4" variant="h4" sx={{ textAlign: "center" }}>
            About Us:
          </Typography>
        </Paper>
      </Box>
      <Box
      sx={{
        margin: 5
      }}>
        <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
            Ethics Pipeline
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 5,
          marginX: 10,
        }}>
        <Typography component="body1" variant="body1" sx={{ textAlign: "center" }}>
          We are Ethics Pipeline. Our goal is to provide ethical insight on the pressing ethical issues of today using the power of AI generative text technology.
          With our website, users can get answers their most pressing ethical problems instantly. We believe that this will lead to a more ethical world, where 
          everyone considers the ethical implications of their decisions. We also believe that avoiding biases is crucial, so we have devolped a way to provide 
          multple sides of every argument by filtering the responses into categories based on perspective: For, Neutral, and Against. Enjoy our website, and stay ethical!
        </Typography>
      </Box>
    </Container>
  );
}
