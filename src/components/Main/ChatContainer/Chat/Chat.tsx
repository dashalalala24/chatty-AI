import { FC, useMemo } from "react";
import { useAppSelector } from "../../../../services/redux/reduxHooks";

import "./Chat.css";
import Message from "../Message/Message";
import MessageLoader from "../Message/MessageLoader/MessageLoader";
import Tag from "../Tag/Tag";
import DefaultMessageText from "../DefaultMessageText/DefaultMessageText";
import {
  currentLanguageSelector,
  languageSelector,
} from "../../../../services/redux/slices/language/language";
import {
  chatStatusSelector,
  messagesSelector,
} from "../../../../services/redux/slices/chat/chat";
import { getCurrentDate, getCurrentTime } from "../../../../utils/utils";

const Chat: FC = () => {
  const currentLanguage = useAppSelector(currentLanguageSelector);
  const language = useAppSelector(languageSelector);

  const chatMessages = useAppSelector(messagesSelector);
  const checkStatus = useAppSelector(chatStatusSelector);

  const lastMessage = useMemo(
    () => chatMessages[chatMessages?.length - 2]?.text,
    [chatMessages]
  );

  return (
    <div className="chat">
      <p className="chat__date">{getCurrentDate()}</p>
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
          createdAt={getCurrentTime()}
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
        </div>
      ) : null}
      {checkStatus === "aiPending" ? <MessageLoader owner={"system"} /> : null}
      {checkStatus === "userPending" ? <MessageLoader owner={"user"} /> : null}
    </div>
  );
};

export default Chat;
