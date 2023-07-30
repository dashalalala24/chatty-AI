import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../services/redux/reduxHooks";

import "./Chat.css";
import Message from "../Message/Message";
import MessageLoader from "../Message/MessageLoader/MessageLoader";
import Tag from "../Tag/Tag";

const Chat: FC = () => {
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage
  );
  const language = useAppSelector((state) => state.language.language);

  const chatMessages = useAppSelector((state) => state.chat.chatMessages);
  const checkStatus = useAppSelector((state) => state.chat.status);
  const lastMessage = chatMessages[chatMessages.length - 1]?.text;

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString().slice(0, 5);

  return (
    <div className="chat">
      <p className="chat__date">{date}</p>
      {chatMessages?.length ? (
        chatMessages.map((message) => {
          return (
            <Message
              key={message.createdAt}
              text={message.text}
              owner={message.owner}
              createdAt={message.createdAt.slice(12, 17)}
              isLastMessage={
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
                  {language[currentLanguage].defaultMessageForNewUser.part_1}
                </p>
                <p className="message__paragraph">
                  <Link to={"/"} className="message__link">
                    {language[currentLanguage].textSignUp}
                  </Link>
                  {language[currentLanguage].or}
                  <Link to={"/"} className="message__link">
                    {language[currentLanguage].textSignIn}
                  </Link>{" "}
                  {language[currentLanguage].defaultMessageForNewUser.part_2}
                </p>
                <p className="message__paragraph">
                  {language[currentLanguage].defaultMessageForNewUser.part_3}
                </p>
                <p className="message__paragraph">
                  {language[currentLanguage].defaultMessageForNewUser.part_4}
                </p>
              </>
            }
            owner="ai"
            createdAt={time}
            // defaultMessage={true}
          />
        </>
      )}
      {chatMessages?.length &&
      checkStatus !== "aiPending" &&
      checkStatus !== "userPending" ? (
        <div className="chat__tags">
          {language[currentLanguage].nextOptions.map((option) => {
            return <Tag key={option} text={option} answer={lastMessage} />;
          })}
        </div>
      ) : !chatMessages?.length ? (
        <div className="chat__tags">
          {language[currentLanguage].exampleQuestions.map((question) => {
            return <Tag key={question} text={question} answer={question} />;
          })}
          {/* <button className="chat__tags-button"></button> */}
        </div>
      ) : null}
      {checkStatus === "aiPending" ? <MessageLoader owner={"ai"} /> : null}
      {checkStatus === "userPending" ? <MessageLoader owner={"user"} /> : null}
    </div>
  );
};

export default Chat;
