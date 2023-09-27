import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import Card from "@mui/material/Card"; // Import the Card componentv

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
        {/* <Paper sx={{ p: 4, borderRadius: 2, backgroundColor: "#fff" }}>
          <Typography component="h1" variant="h1" sx={{ textAlign: "center" }}>
            How to Use page
          </Typography>
        </Paper> */}

        {/* Card Section */}
        <Card
          sx={{ marginTop: 2, padding: 2, margin: "0 auto", maxWidth: "900px" }}
        >
          <div style={{ textAlign: "center" }}>
            <Typography variant="h2">How to Use the AI Chat Bot:</Typography>
          </div>
          <ol>
            <li>
              <Typography variant="body1">
                <strong>Selecting a Button:</strong> Once you've typed in an
                ethical question, choose one of the three buttons (For, Against,
                Neutral) that represents your stance or opinion on the question.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Viewing Results:</strong> After selecting one of the
                buttons, the system will analyze your response and display the
                results.
                {/* You will see the overall distribution of responses from other users who have answered the same ethical question. This can help you understand how different people perceive the ethical dilemma. */}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Exploring Further:</strong> You can continue exploring
                more ethical questions by entering them into the input box and
                selecting your stance using the buttons. Each time you select a
                button, you will receive immediate feedback and insights into
                the collective opinions on that particular question.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>About Us:</strong> If you want to learn more about our
                organization and the purpose of the Ethical Questionnaire, click
                on the "About Us" section in the navigation bar.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Returning Home:</strong> At any point during your
                session, you can click the "Home" button in the navigation bar
                to return to the home page and start anew.
              </Typography>
            </li>
          </ol>
        </Card>
      </Box>
    </Container>
  );
}
