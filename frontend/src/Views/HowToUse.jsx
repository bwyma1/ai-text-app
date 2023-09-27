import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

export default function HowToUse() {
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
            How to Use page
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
