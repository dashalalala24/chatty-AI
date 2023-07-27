import {
  FC,
  MutableRefObject,
  ReactNode,
  useLayoutEffect,
  useRef,
} from "react";
import "./Message.css";

interface IMessage {
  text: string | ReactNode;
  owner: "user" | "ai" | "";
  createdAt: string;
  // defaultMessage?: boolean;
  // ref?: MutableRefObject<HTMLDivElement | null>;
  lastMessage?: boolean;
}
const Message: FC<IMessage> = ({
  text,
  owner,
  createdAt,
  // defaultMessage = false,
  lastMessage = false,
}) => {
  const lastMessageRef = useRef<null | HTMLDivElement>(null);

  const onCopyClick = async () => {
    if (typeof text === "string") {
      try {
        await navigator.clipboard.writeText(text);
      } catch (_) {
        console.log("Нет доступа к буферу обмена");
      }
    }
  };

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
      ref={lastMessage ? lastMessageRef : null}
    >
      <div className={`message__container message__container_type_${owner}`}>
        {owner === "ai" ? (
          <div
            className={`message__decoration message__decoration_type_${owner}`}
          ></div>
        ) : null}
        {typeof text === "string" ? (
          <p className={`message__text message__text_type_${owner}`}>{text}</p>
        ) : (
          <div className="message__text-container message__text_type_ai">
            {text}
          </div>
        )}
        {owner === "user" ? (
          <div
            className={`message__decoration message__decoration_type_${owner}`}
          ></div>
        ) : owner === "ai" && typeof text === "string" ? (
          <button
            className="message__copy-button"
            onClick={onCopyClick}
          ></button>
        ) : null}
      </div>
      <p
        className={`message__time message__time_type_${owner} ${
          lastMessage ? "message__time_last" : ""
        }`}
      >
        {createdAt}
      </p>
    </div>
  );
};

export default Message;
