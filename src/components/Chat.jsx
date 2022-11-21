import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import bot from "../images/bot.jpg";

const steps = [
  {
    id: "1",
    message: "Hii,Welcome to Advika Technology,i'm Roze.",
    trigger: "2",
  },
  {
    id: "2",
    message: "What is Your Name?",
    trigger: "3",
  },
  {
    id: "3",
    user: true,
    trigger: "4",
  },
  {
    id: "4",
    message: "Hi {previousValue}  nice to meet you!",
    trigger: "5",
  },
  {
    id: "5",
    message: "In Case We get disconnect May i Know Your Number: ",
    trigger: "6",
  },
  {
    id: "6",
    user: true,
    validator: (input) => {
      var phoneno = /^\d{10}$/;
      if (input.match(phoneno)) {
        return true;
      } else {
        return "Please type a valid Number";
      }
    },
    trigger: "7",
  },
  {
    id: "7",
    message: "Thanks,we'll connect you soon.",
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
