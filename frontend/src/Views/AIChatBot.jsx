// import React from "react";
// import PropTypes from "prop-types";
// import SendRoundedIcon from "@mui/icons-material/SendRounded";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useTheme } from "@emotion/react";
// import {
//   AppBar,
//   FormControl,
//   IconButton,
//   InputAdornment,
//   InputLabel,
//   OutlinedInput,
//   Tab,
//   Tabs,
// } from "@mui/material";

// const darkTheme = createTheme({
//   // palette: {
//   //   mode: 'dark',
//   // },
// });

// export default function AIChatBot() {
//   //submitting the form and logging in if correct credentials
//   //if correct it will send the user to "/"
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     (async () => {})();
//   };

//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Box sx={{ display: "flex", flexWrap: "wrap" }}>
//       <TextField
//                 value={chatgpt_output}
//                 label="Enter your name"
//                 onChange={(e) => {
//                     setName(e.target.value);
//                 }}
//             />
//         <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">
//             Ethics Topic
//           </InputLabel>
//           <OutlinedInput
//             id="ethics-input"
//             type="text"
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   onClick={handleSubmit}
//                   onMouseDown={handleSubmit}
//                   edge="end"
//                 >
//                   {<SendRoundedIcon />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//         </FormControl>
//       </Box>
//     </ThemeProvider>
//   );
// }
//==============================================================================================
// import React, { useState } from "react";
// import PropTypes from "prop-types";

import "./ChatBox.css";
// import ChatIcon from "@mui/icons-material/Chat";
import SendRounded from "@mui/icons-material/SendRounded";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { OpenAI } from "../API/Api";

// // eslint-disable-next-line space-unary-ops

// export default function AIChatBox() {
//   const socket = require("socket.io");
// constructor() {
//   super();
//   this.onClickSubmit = this.onClickSubmit.bind(this);
//   this.chatContainerRef = null;
//   this.state = {
//     messages: [],
//     newMessage: '',
//     socket: ai.open(socketio),
//     currentGptMessage: '',
//   };

//   const {
//     socket,
//   } = this.state;
//   socket.onStream((chunk) => this.setState((prev) => ({
//     currentGptMessage: prev.currentGptMessage + chunk,
//   })));
//   socket.onStop(() => { this.setState((prev) => ({ messages: [...prev.messages, { content: prev.currentGptMessage, role: 'assistant' }], currentGptMessage: '' })); });
// }

// const componentDidUpdate(prevProps, prevState) {
//   const { messages, currentGptMessage } = this.state;
//   const { messages: prevMessages } = prevState;
//   if (currentGptMessage !== '' || prevMessages.length !== messages.length) {
//     this.chatContainerRef.scrollTo({ top: this.chatContainerRef.scrollHeight, behavior: 'smooth' });
//   }
// }

// const onClickSubmit() = (event) => {
//   const {
//     messages,
//     newMessage,
//     socket,
//   } = this.state;
// };

// const { activeDescriptors } = this.props;

// if (newMessage.trim() === '') return;

// this.setState({
//   messages: [
//     ...messages,
//     { content: newMessage, role: 'user' },
//   ],
//   newMessage: '',
// });

// socket.ask({
//   query: newMessage,
//   history: [{ role: 'system', content: `Content Message: ${activeDescriptors.join()}` }, ...messages],
//   openai_api_key: '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',
//   gpt_model: 'gpt-4',
//   max_tokens: 2048,
//   premise: 'Use the above excerpts from the Fidelity website to respond to the below prompt.',
// });

// const { messages, newMessage, currentGptMessage } = useState()

//   const onClickSubmit = (event) => {};
//   const [messages, setMessages] = React.useState([""]);
//   const [currentGptMessage, setCurrentGptMessage] = React.useState("");
//   const [newMessage, setNewMessage] = React.useState("");

//   return (
//     <div className="chat-container">
//       <div
//         // ref={(ref) => {
//         //   this.chatContainerRef = ref;
//         // }}
//         className="prev-message-container"
//       >
//         {messages.length === 0 ? (
//           <p className="inital-message">
//             Fidelity AI Assistant. How can I help you?
//           </p>
//         ) : null}
//         {messages.map((message, i) => (
//           // This rule needs to be disabled for this line so that messages to match the gpt format
//           // eslint-disable-next-line react/no-array-index-key
//           <div
//             key={i}
//             className={
//               message.role === "user"
//                 ? "prev-message prev-message-user"
//                 : "prev-message prev-message-gpt"
//             }
//           >
//             {message.role === "user" ? null : (
//               <img
//                 src={<ChatIcon />}
//                 aria-label="message avator"
//                 style={{ maxHeight: "1.6rem", paddingLeft: "1rem" }}
//               />
//             )}
//             <div style={{ paddingLeft: "1rem" }}>{message.content}</div>
//           </div>
//         ))}
//         {currentGptMessage === "" ? null : (
//           <div key={messages.length} className="prev-message prev-message-gpt">
//             <img
//               src={<ChatIcon />}
//               aria-label="message avator"
//               style={{ maxHeight: "1.6rem", paddingLeft: "1rem" }}
//             />
//             <div style={{ paddingLeft: "1rem" }}>{currentGptMessage}</div>
//           </div>
//         )}
//       </div>
//       <div className="chat-input-container">
//         <form className="chat-input-form">
//           <input
//             type="text"
//             required
//             className="chat-input"
//             placeholder="Type a message"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.value)}
//             onKeyDown={(e) => {
//               if (e.ctrlKey && e.key === "Enter") {
//                 onClickSubmit();
//               }
//             }}
//           />
//           <input
//             className="chat-submit"
//             type="image"
//             aria-label="input submit button"
//             src={<SendRounded />}
//             onClick={onClickSubmit}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }
//======================================================================================
import sendBtn from "../assets/send.svg";

// export default function AIChatBot() {
//   return (
//     <div className="main">
//       <div className="chats">
//         <div className="chat">
//           <AccountCircleIcon />
//           <p className="txt">Lorum Ipse dolor sit amet consecus</p>
//           <SmartToyIcon />
//           <p className="txt">Lorum Ipse dolor sit amet consecus</p>
//         </div>
//       </div>
//       <div className="chatFooter">
//         <div className="inp">
//           <input type="text" name="" id="" />
//           <button className="send" placeholder="Send Ethical Topic">
//             <img src={sendBtn} alt="send" />
//           </button>
//         </div>
//         <p>
//           Ethics Chat Bot is not liable for the choices you make with the
//           information it provides
//         </p>
//       </div>
//     </div>
//   );
// }
import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GptIcon } from "../../assets";
import { insertNew } from "../../redux/messages";
import "./style.scss";

const Chat = forwardRef(({ error }, ref) => {
  const dispatch = useDispatch();

  const contentRef = useRef();

  const { user, messages } = useSelector((state) => state);
  const { latest, content, all } = messages;

  const loadResponse = (
    stateAction,
    response = content,
    chatsId = latest?.id
  ) => {
    clearInterval(window.interval);

    stateAction({ type: "resume", status: true });

    contentRef?.current?.classList?.add("blink");

    let index = 0;

    window.interval = setInterval(() => {
      if (index < response.length && contentRef?.current) {
        if (index === 0) {
          dispatch(insertNew({ chatsId, content: response.charAt(index) }));
          contentRef.current.innerHTML = response.charAt(index);
        } else {
          dispatch(
            insertNew({
              chatsId,
              content: response.charAt(index),
              resume: true,
            })
          );
          contentRef.current.innerHTML += response.charAt(index);
        }
        index++;
      } else {
        stopResponse(stateAction);
      }
    }, 20);
  };

  const stopResponse = (stateAction) => {
    if (contentRef?.current) {
      contentRef.current.classList.remove("blink");
    }
    stateAction({ type: "resume", status: false });
    clearInterval(window.interval);
  };

  useImperativeHandle(ref, () => ({
    stopResponse,
    loadResponse,
    clearResponse: () => {
      if (contentRef?.current) {
        contentRef.current.innerHTML = "";
        contentRef?.current?.classList.add("blink");
      }
    },
  }));

  return (
    <div className="Chat">
      {all
        ?.filter((obj) => {
          return !obj.id ? true : obj?.id !== latest?.id;
        })
        ?.map((obj, key) => {
          return (
            <Fragment key={key}>
              <div className="qs">
                <div className="acc">{user?.fName?.charAt(0)}</div>
                <div className="txt">{obj?.prompt}</div>
              </div>

              <div className="res">
                <div className="icon">
                  <GptIcon />
                </div>
                <div className="txt">
                  <span>{obj?.content}</span>
                </div>
              </div>
            </Fragment>
          );
        })}

      {latest?.prompt?.length > 0 && (
        <Fragment>
          <div className="qs">
            <div className="acc">{user?.fName?.charAt(0)}</div>
            <div className="txt">{latest?.prompt}</div>
          </div>

          <div className="res">
            <div className="icon">
              <GptIcon />
              {error && <span>!</span>}
            </div>
            <div className="txt">
              {error ? (
                <div className="error">
                  Something went wrong. If this issue persists please contact us
                  through our help center at help.openai.com.
                </div>
              ) : (
                <span ref={contentRef} className="blink" />
              )}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
});
export default Chat;
