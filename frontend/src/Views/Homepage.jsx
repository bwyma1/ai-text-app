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
          <Typography component="h1" variant="h1" sx={{ textAlign: "center" }}>
            Welcome to Ethics Pipeline
          </Typography>
          <Typography
            component="p"
            variant="h4"
            sx={{ mt: 2, mx: 10, textAlign: "center" }}
          >
            The latest AI Ethics Website for all your one-stop online website for answering your moral and ethical
            questions...
          </Typography>
          <Typography
            component="p"
            variant="h5"
            sx={{ mt: 2, textAlign: "center" }}
          >
            We Know All...
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
