import { FC, useLayoutEffect, useRef } from "react";
import "./MessageLoader.css";

interface IMessageLoader {
  owner: "user" | "ai";
}

const MessageLoader: FC<IMessageLoader> = ({ owner }) => {
  const loader = useRef<null | HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (loader.current) {
      loader.current.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div ref={loader} className={`message-loader message-loader_type_${owner}`}>
      {owner === "ai" ? (
        <div
          className={`message-loader__decoration message-loader__decoration_type_${owner}`}
        ></div>
      ) : null}
      <div
        className={`message-loader__container message-loader__container_type_${owner}`}
      >
        <div
          className={`message-loader__dot message-loader__dot_type_${owner}`}
        ></div>
        <div
          className={`message-loader__dot message-loader__dot_type_${owner}`}
        ></div>
        <div
          className={`message-loader__dot message-loader__dot_type_${owner}`}
        ></div>
      </div>
      {owner === "user" ? (
        <div
          className={`message-loader__decoration message-loader__decoration_type_${owner}`}
        ></div>
      ) : null}
    </div>
  );
};

export default MessageLoader;
