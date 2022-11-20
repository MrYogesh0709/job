import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import bot from "../images/bot.jpg";

const steps = [
  {
    id: "1",
    message: "What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true,
  },
];
const theme = {
  background: "skyblue",
  headerBgColor: "pink",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "black",
  botFontColor: "white",
  userBubbleColor: "green",
  userFontColor: "white",
};
const config = {
  botAvatar: bot,
  floating: true,
};
const Chat = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot headerTitle="Advika Technology" steps={steps} {...config} />
    </ThemeProvider>
  );
};

export default Chat;
