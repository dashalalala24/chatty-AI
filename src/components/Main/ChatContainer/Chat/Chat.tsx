import { FC } from "react";
import "./Chat.css";
import Message from "../Message/Message";

const Chat: FC = () => {
  return (
    <div className="chat">
      <p className="chat__date">24.07.2023</p>
      <Message
        text={"*какой-то невероятный вопрос пользователя*"}
        owner="user"
      />
      <Message
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
        owner="ai"
      />{" "}
      <Message
        text={"*какой-то невероятный вопрос пользователя*"}
        owner="user"
      />
      <Message
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
        owner="ai"
      />{" "}
      <Message
        text={"*какой-то невероятный вопрос пользователя*"}
        owner="user"
      />
      <Message
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
        owner="ai"
      />
      <Message
        text={"Ого, спасибо, вот это да, теперь все понятно!!!"}
        owner="user"
      />
      <Message
        lastMessage={true}
        text={"Lorem ipsum, Lorem ipsum... "}
        owner="ai"
      />
    </div>
  );
};

export default Chat;
