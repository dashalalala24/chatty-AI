import { FC, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./DefaultMessage.css";
import Message from "../Message/Message";
import { useAppSelector } from "../../../../services/redux/reduxHooks";
import { CURRENT_TIME } from "../../../../utils/constants";
import {
  currentLanguageSelector,
  languageSelector,
} from "../../../../services/redux/slices/language/language";

interface IDefaultMessage {
  welcomeMessage: boolean;
}

const DefaultMessage: FC<IDefaultMessage> = ({ welcomeMessage }) => {
  const messageRef = useRef<null | HTMLDivElement>(null);

  const currentLanguage = useAppSelector(currentLanguageSelector);
  const language = useAppSelector(languageSelector);

  useLayoutEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div ref={messageRef}>
      {welcomeMessage ? (
        <Message
          text={
            <>
              <p className="default-message__paragraph">
                {language[currentLanguage].defaultMessageForNewUser.part_1}
              </p>
              <p className="default-message__paragraph">
                <Link to={"/"} className="default-message__link">
                  {language[currentLanguage].textSignUp}
                </Link>
                {language[currentLanguage].or}
                <Link to={"/"} className="default-message__link">
                  {language[currentLanguage].textSignIn}
                </Link>{" "}
                {language[currentLanguage].defaultMessageForNewUser.part_2}
              </p>
              <p className="default-message__paragraph">
                {language[currentLanguage].defaultMessageForNewUser.part_3}
              </p>
              <p className="default-message__paragraph">
                {language[currentLanguage].defaultMessageForNewUser.part_4}
              </p>
            </>
          }
          owner="ai"
          createdAt={CURRENT_TIME}
        />
      ) : (
        <Message
          text={
            <>
              <p className="default-message__paragraph">
                {language[currentLanguage].helpMessage.part_1}
              </p>
              <p className="default-message__paragraph">
                {language[currentLanguage].helpMessage.part_2}
              </p>
              <p className="default-message__paragraph">
                {language[currentLanguage].helpMessage.part_3}
              </p>
              <p className="default-message__paragraph">
                {language[currentLanguage].helpMessage.part_4}
              </p>
              <p className="default-message__paragraph">
                {language[currentLanguage].helpMessage.part_5}
              </p>
              <p className="default-message__paragraph">
                {language[currentLanguage].helpMessage.part_6}
              </p>
            </>
          }
          owner="ai"
          createdAt={CURRENT_TIME}
        />
      )}
    </div>
  );
};

export default DefaultMessage;
