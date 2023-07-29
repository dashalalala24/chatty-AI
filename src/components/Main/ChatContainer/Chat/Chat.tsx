import { FC } from "react";
import { Link } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/redux/reduxHooks";

import "./Chat.css";
import Message from "../Message/Message";
import MessageLoader from "../Message/MessageLoader/MessageLoader";
import Tag from "../Tag/Tag";
import { exampleQuestions } from "../../../../utils/constants";
// import { addTextQuestion } from "../../../../services/redux/slices/chat/chat";

const Chat: FC = () => {
  // const dispatch = useAppDispatch();

  const chatMessages = useAppSelector((state) => state.chat.chatMessages);
  const checkStatus = useAppSelector((state) => state.chat.status);

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString().slice(0, 5);

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
        <>
          <Message
            text={
              <>
                <p className="message__paragraph">
                  Привет! Я — ChattyAI, твой голосовой помощник! Готов помочь с
                  чем угодно, что связано с твоей работой.
                </p>
                <p className="message__paragraph">
                  <Link to={"/"} className="message__link">
                    Зарегистрируйся
                  </Link>{" "}
                  или{" "}
                  <Link to={"/"} className="message__link">
                    войди
                  </Link>{" "}
                  в свой аккаунт — так наша беседа сохранится, и ничего важного
                  не потеряется!
                </p>
                <p className="message__paragraph">
                  Я с радостью исследую разные идеи, чтобы поддержать тебя. Но
                  помни, я могу отклонить неуместные запросы.
                </p>
                <p className="message__paragraph">
                  Выражай свои мысли понятно и ясно, и не стесняйся задавать
                  уточняющие вопросы. Давай начнем! Жми на микрофон, спрашивай и
                  я помогу!
                </p>
              </>
            }
            owner="ai"
            createdAt={time}
            // defaultMessage={true}
          />
          <div className="chat__tags">
            {exampleQuestions.map((question) => {
              return <Tag key={question} text={question} />;
            })}
            {/* <button className="chat__tags-button"></button> */}
          </div>
        </>
      )}
      {checkStatus === "aiPending" ? <MessageLoader owner={"ai"} /> : null}
      {checkStatus === "userPending" ? <MessageLoader owner={"user"} /> : null}
    </div>
  );
};

export default Chat;
