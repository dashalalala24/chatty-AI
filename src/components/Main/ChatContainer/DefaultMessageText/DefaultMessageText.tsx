import { Link } from "react-router-dom";

import "./DefaultMessageText.css";
import { useAppSelector } from "../../../../services/redux/reduxHooks";
import {
  currentLanguageSelector,
  languageSelector,
} from "../../../../services/redux/slices/language/language";

const DefaultMessageText = () => {
  const currentLanguage = useAppSelector(currentLanguageSelector);
  const language = useAppSelector(languageSelector);

  return (
    <>
      <p className="default-message-text__paragraph">
        {language[currentLanguage].defaultMessageForNewUser.part_1}
      </p>
      <p className="default-message-text__paragraph">
        <Link to={"/"} className="default-message-text__link">
          {language[currentLanguage].textSignUp}
        </Link>
        {language[currentLanguage].or}
        <Link to={"/"} className="default-message-text__link">
          {language[currentLanguage].textSignIn}
        </Link>{" "}
        {language[currentLanguage].defaultMessageForNewUser.part_2}
      </p>
      <p className="default-message-text__paragraph">
        {language[currentLanguage].defaultMessageForNewUser.part_3}
      </p>
      <p className="default-message-text__paragraph">
        {language[currentLanguage].defaultMessageForNewUser.part_4}
      </p>
    </>
  );
};

export default DefaultMessageText;
