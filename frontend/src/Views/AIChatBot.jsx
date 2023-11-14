import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { AppBar, Button, Card, Tab, Tabs } from "@mui/material";
import { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "./custom-styles.css";

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

const darkTheme = createTheme();

const API_KEY = "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";

const AIChatBot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm The Crystal Ball of Truth! Ask me any ethical question and stance and I'll tell you what the world thinks! To used me, simply type in your question, and submit it for just the default responese. If you have a select the stance, I'll give you a more specific response. Just click on the buttons to the right to select your stance!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = React.useState(0);
  const [outputValue, setOutputValue] = useState("");
  const theme = useTheme();
  const tempBuffer = [];

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

  const handleButtonClicked = (option) => {
    const newMessage = {
      message: `Argument ${option}`,
      direction: "outgoing",
      sender: "user",
    };
  
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);
  
    // Interaction with your chatbot or specific actions based on the selected option can be handled here.
    // For example, you can send the selected option to your backend and process it there.
    // You can also use the selected option to modify the response from your chatbot.
    // For example, you can append the selected option to the response from your chatbot.
  };

  return (
      <div className="App">
        <div style={{ position: "absolute", height: "600px", width: "100%", display: "flex", justifyContent: "flex", alignItems: "center" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="Working on it" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  console.log(message);
                  return (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Message key={i} model={message} />
                    </div>
                  );                
                })}
              </MessageList>
              <MessageInput
                placeholder="Enter your Question"
                onSend={handleSendRequest}
              />
            </ChatContainer>
          </MainContainer>
          <Card style={{ height: "500px", width: "400px", marginLeft: "10px", padding: "70px 30px 30px 10px" }}>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "50px", gap: "30px" }}>
              <Button
                variant="contained"
                onClick={() => handleButtonClicked("For")}
                style={{ backgroundColor: "green", color: "white" }}
              >
                For
              </Button>
              <Card>
                <Typography variant="body2">
                  Provide reasons in favor of your stance.
                </Typography>
              </Card>
              <Button variant="contained" onClick={() => handleButtonClicked("Neutral")}>
                Neutral
              </Button>
              <Card>
                <Typography variant="body2">
                  Present a neutral perspective or ask for more information.
                </Typography>
              </Card>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClicked("Against")}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Against
                </Button>
              <Card>
                <Typography variant="body2">
                  Argue against the given stance or present opposing views.
                </Typography>
              </Card>
            </div>
          </Card>
        </div>
    </div>
  );
};

export default AIChatBot;


