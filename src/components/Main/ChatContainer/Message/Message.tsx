import { FC, useLayoutEffect, useRef } from "react";
import "./Message.css";
import { copyTextToClipboard } from "../../../../utils/utils";
import { IMessage } from "../../../../types/types";

const Message: FC<IMessage> = ({
  text,
  owner,
  createdAt,
  isLastMessage = false,
}) => {
  const lastMessageRef = useRef<null | HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      className={`message message_type_${owner}`}
      ref={isLastMessage ? lastMessageRef : null}
    >
      <div className={`message__container message__container_type_${owner}`}>
        {owner === "system" ? (
          <div
            className={`message__decoration message__decoration_type_${owner}`}
          ></div>
        ) : null}
        {typeof text === "string" ? (
          <p className={`message__text message__text_type_${owner}`}>{text}</p>
        ) : (
          <div className="message__text-container message__text_type_system">
            {text}
          </div>
        )}
        {owner === "user" ? (
          <div
            className={`message__decoration message__decoration_type_${owner}`}
          ></div>
        ) : owner === "system" && typeof text === "string" ? (
          <button
            className="message__copy-button"
            onClick={() => copyTextToClipboard(text)}
          ></button>
        ) : null}
      </div>
      <p className={`message__time message__time_type_${owner}`}>{createdAt}</p>
    </div>
  );
};

export default Message;
