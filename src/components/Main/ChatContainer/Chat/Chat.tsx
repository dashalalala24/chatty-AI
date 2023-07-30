import { FC } from "react";
import { useAppSelector } from "../../../../services/redux/reduxHooks";

import "./Chat.css";
import Message from "../Message/Message";
import MessageLoader from "../Message/MessageLoader/MessageLoader";
import Tag from "../Tag/Tag";
import DefaultMessageText from "../DefaultMessageText/DefaultMessageText";
import { CURRENT_DATE, CURRENT_TIME } from "../../../../utils/constants";
import {
  currentLanguageSelector,
  languageSelector,
} from "../../../../services/redux/slices/language/language";
import {
  chatStatusSelector,
  messagesSelector,
} from "../../../../services/redux/slices/chat/chat";

const Chat: FC = () => {
  const currentLanguage = useAppSelector(currentLanguageSelector);
  const language = useAppSelector(languageSelector);

  const chatMessages = useAppSelector(messagesSelector);
  const checkStatus = useAppSelector(chatStatusSelector);

  const lastMessage = chatMessages[chatMessages?.length - 2]?.text;

  return (
    <div className="chat">
      <p className="chat__date">{CURRENT_DATE}</p>
      {chatMessages?.length ? (
        chatMessages?.map((message) => {
          return (
            <Message
              key={message.createdAt}
              text={message.text}
              owner={message.owner}
              createdAt={message.createdAt.slice(12, 17)}
              isLastMessage={
                chatMessages?.indexOf(message) === chatMessages?.length - 1
                  ? true
                  : false
              }
            />
          );
        })
      ) : (
        <Message
          text={<DefaultMessageText />}
          owner={"system"}
          createdAt={CURRENT_TIME}
        />
      )}
      {chatMessages?.length &&
      checkStatus !== "aiPending" &&
      checkStatus !== "userPending" ? (
        <div className="chat__tags">
          <Tag
            key={1}
            text={language[currentLanguage].tryAgainTag}
            answer={lastMessage || ""}
          />
          <Tag
            key={2}
            text={`${language[currentLanguage].continueTag}`}
            answer={language[currentLanguage].continueTag}
          />
        </div>
      ) : !chatMessages?.length ? (
        <div className="chat__tags">
          {language[currentLanguage].exampleQuestions.map((question) => {
            return <Tag key={question} text={question} answer={question} />;
          })}
          {/* <button className="chat__tags-button"></button> */}
        </div>
      ) : null}
      {checkStatus === "aiPending" ? <MessageLoader owner={"system"} /> : null}
      {checkStatus === "userPending" ? <MessageLoader owner={"user"} /> : null}
    </div>
  );
};

export default Chat;
