import { AppContext } from "../Context/AppContext";
import React, { useContext } from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const handleNavigate = (path) => {
    navigate(path);
  };

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
            Welcome to our AI website!
          </Typography>
          <Typography
            component="p"
            variant="h5"
            sx={{ mt: 2, textAlign: "center" }}
          >
            Your one-stop online website for answering your moral and ethical
            questions...
          </Typography>
          <Typography
            component="p"
            variant="h5"
            sx={{ mt: 2, textAlign: "center" }}
          >
            We Know All...
          </Typography>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {context.currUser == null ? (
              <Grid item xs={8} md={2}>
                <Button
                  variant="contained"
                  onClick={() => handleNavigate("/signup")}
                  sx={{
                    mt: 2,
                    backgroundColor: "#1976d2",
                    borderColor: "#1976d2",
                    color: "#fff",
                    width: "20rem",
                    mb: 2,
                  }}
                >
                  Create an Account Right Now!
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleNavigate("/login")}
                  sx={{
                    mt: 2,
                    backgroundColor: "#1976d2",
                    borderColor: "#1976d2",
                    color: "#fff",
                    width: "20rem",
                  }}
                >
                  Already Have an Account with us? Log in!
                </Button>
              </Grid>
            ) : (
              <Grid item xs={8} md={2}>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ mt: 2, textAlign: "center" }}
                >
                  Something here...
                </Typography>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
