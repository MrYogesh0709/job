import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import bot from "../images/bot.jpg";

const steps = [
  {
    id: "0",
    message:
      "Hii, I am a support bot and my name is Max , May i know your name please ?",
    trigger: "1",
  },
  {
    id: "1",
    user: true,
    trigger: "2",
  },
  {
    id: "2",
    message: "how can i help you?",
    trigger: "3",
  },
  {
    id: "3",
    user: true,
    trigger: "4",
  },
  {
    id: "4",
    message:
      "Just in case we get disconnected , can i have your phone no please ",
    trigger: "5",
  },
  {
    id: "5",
    user: true,
    trigger: "6",
  },
  {
    id: "6",
    message: "thanks,we'll connect you soon!",
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
  height: "80%",
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
