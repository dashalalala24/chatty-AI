import { FC } from "react";
import "./ChatContainer.css";
import Chat from "./Chat/Chat";
import WaveAnimation from "./WaveAnimation/WaveAnimation";
import Input from "./Input/Input";

const ChatContainer: FC = () => {
  return (
    <section className="chat-сontainer">
      <Chat />
      <WaveAnimation />
      <Input />
    </section>
  );
};

export default ChatContainer;
