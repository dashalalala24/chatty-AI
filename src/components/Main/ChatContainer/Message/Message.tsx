import { FC, MutableRefObject, useLayoutEffect, useRef } from "react";
import "./Message.css";

interface IMessage {
  text: string;
  owner: "user" | "ai";
  // ref?: MutableRefObject<HTMLDivElement | null>;
  lastMessage?: boolean;
}
const Message: FC<IMessage> = ({ text, owner, lastMessage }) => {
  const lastMessageRef = useRef<null | HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  }, []);
  return (
    <div
      className={`message message_type_${owner}`}
      ref={lastMessage ? lastMessageRef : null}
    >
      <div className={`message__container message__container_type_${owner}`}>
        {owner === "ai" ? (
          <div
            className={`message__decoration message__decoration_type_${owner}`}
          ></div>
        ) : null}
        <p className={`message__text message__text_type_${owner}`}>{text}</p>
        {owner === "user" ? (
          <div
            className={`message__decoration message__decoration_type_${owner}`}
          ></div>
        ) : null}
      </div>
      <p
        className={`message__time message__time_type_${owner} ${
          lastMessage ? "message__time_last" : ""
        }`}
      >
        20:30
      </p>
    </div>
  );
};

export default Message;
