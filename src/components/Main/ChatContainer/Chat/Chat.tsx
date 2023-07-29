import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../services/redux/reduxHooks";

import "./Chat.css";
import Message from "../Message/Message";
import MessageLoader from "../Message/MessageLoader/MessageLoader";

const Chat: FC = () => {
  const chatMessages = useAppSelector((state) => state.chat.chatMessages);
  const checkStatus = useAppSelector((state) => state.chat.status);

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString().slice(0, 5);
  console.log("time", time);

  return (
    <div className="chat">
      <p className="chat__date">{date}</p>
      {chatMessages.length ? (
        chatMessages.map((message) => {
          return (
            <Message
              key={message.createdAt}
              text={message.text}
              owner={message.owner}
              createdAt={message.createdAt.slice(12, 17)}
              lastMessage={
                chatMessages.indexOf(message) === chatMessages.length - 1
                  ? true
                  : false
              }
            />
          );
        })
      ) : (
        <Message
          text={
            <>
              <p className="message__paragraph">
                Привет! Я - ChattyAI, твой голосовой помощник
              </p>
              <p className="message__paragraph">
                Я готов помочь тебе с чем угодно, что связано с твоей работой.
                Не забывай входить в свой аккаунт или{" "}
                <Link to={"/"} className="message__link">
                  зарегистрируйся
                </Link>{" "}
                - наша беседа сохранится и ты не потеряешь ничего важного!
              </p>
              <p className="message__paragraph">
                Я с радостью исследую разные идеи, чтобы поддержать тебя. Но
                помни, я могу отклонить неуместные запросы Выражай свои мысли
                понятно и ясно, и не стесняйся задавать уточняющие вопросы.
                Давай начнем! Жми на микрофон, спрашивай и я помогу!
              </p>
              <p className="message__paragraph">
                Выражай свои мысли понятно и ясно, и не стесняйся задавать
                уточняющие вопросы. Давай начнем! Жми на микрофон, спрашивай и я
                помогу!
              </p>
            </>
          }
          owner="ai"
          createdAt={time}
          // defaultMessage={true}
        />
      )}
      {checkStatus === "aiPending" ? <MessageLoader owner={"ai"} /> : null}
      {checkStatus === "userPending" ? <MessageLoader owner={"user"} /> : null}
    </div>
  );
};

export default Chat;
