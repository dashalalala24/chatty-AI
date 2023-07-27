import { FC } from "react";
import "./Chat.css";
import Message from "../Message/Message";
import { useAppSelector } from "../../../../services/redux/reduxHooks";
import { Link } from "react-router-dom";

const Chat: FC = () => {
  const chatMessages = useAppSelector((state) => state.chat.chat);
  console.log(chatMessages);

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString().slice(0, 5);

  return (
    <div className="chat">
      <p className="chat__date">{date}</p>
      {chatMessages.length ? (
        chatMessages.map((message) => {
          return (
            // <ul className="chat__messages">
            //   <li key={message.createdAt}>
            <Message
              key={message.createdAt}
              text={message.text}
              owner={message.owner}
              createdAt={message.createdAt.slice(12, 17)}
            />
            //   </li>
            // </ul>
          );
        })
      ) : (
        <Message
          text={
            // "Привет! Я - ChattyAI, твой голосовой помощник"
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
      {/* <Message
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
      /> */}
    </div>
  );
};

export default Chat;
