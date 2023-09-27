import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

export default function Homepage() {
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
          <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
            Welcome to The Crystal Ball of Truth
          </Typography>
          <Typography
            component="p"
            variant="h4"
            sx={{ mt: 2, mx: 10, textAlign: "center" }}
          >
            The latest AI Ethics Website from Ethical Pipeline 
          </Typography>
          <Typography
            component="p"
            variant="h5"
            sx={{ mt: 2, mx: 10, textAlign: "center" }}
          >
            Your one-stop destination for answering all of your moral and ethical questions
          </Typography>
          <Typography
            component="p"
            variant="h6"
            sx={{ mt: 2, textAlign: "center" }}
          >
            We Know All...
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
