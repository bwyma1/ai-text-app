import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { AppBar, Tab, Tabs } from "@mui/material";
import Chatbox from "../Components/chatBox.jsx";

const darkTheme = createTheme({
  // palette: {
  //   mode: 'dark',
  // },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function AIChatBot() {
  //submitting the form and logging in if correct credentials
  //if correct it will send the user to "/"
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    (async () => {})();
  };

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" centered>
            -Chat Bot-
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "background.paper" }}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              sx={{ mt: 3, mb: 2 }}
              required
              fullWidth
              id="question"
              label="Enter Your Question Here"
              name="question"
              type="question"
              autoComplete="question"
              autoFocus
            />
          </Box>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Against" {...a11yProps(0)} />
              <Tab label="Neutral" {...a11yProps(1)} />
              <Tab label="For" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <view
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              Against answer to question
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Neutral answer to question
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              For answer to question
            </TabPanel>
          </view>
          <Chatbox />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

