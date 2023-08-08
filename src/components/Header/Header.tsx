import { FC, useState } from "react";
import "./Header.css";
import headerLogo from "../../images/header-logo.svg";
import {
  useAppDispatch,
  useAppSelector,
} from "../../services/redux/reduxHooks";
import {
  currentLanguageSelector,
  languageSelector,
  setLanguage,
} from "../../services/redux/slices/language/language";
import { addChatMessage } from "../../services/redux/slices/chat/chat";
import { LANG_OPTIONS } from "../../utils/constants";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(currentLanguageSelector);
  const language = useAppSelector(languageSelector);

  const [isLanguagesVisible, setIsLanguagesVisible] = useState(false);

  const renderOtherLangButtons = () => {
    return LANG_OPTIONS.filter((lang) => lang !== currentLanguage).map(
      (lang) => {
        return (
          <button
            key={lang}
            className="header__lang-button"
            onClick={() => handleSelect(lang)}
          >
            {lang}
          </button>
        );
      }
    );
  };
  const handleSelect = (lang: string) => {
    dispatch(setLanguage(lang));
    setIsLanguagesVisible(false);
  };

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <div className="header__container">
        <nav className="header__nav">
          <button
            aria-label="help"
            className="header__help"
            onClick={() => {
              const date = new Date().toLocaleString();
              dispatch(
                addChatMessage({
                  text: language[currentLanguage].helpMessage,
                  owner: "system",
                  createdAt: date,
                })
              );
            }}
          >
            {language[currentLanguage].help}
          </button>
        </nav>

        <div className="header__buttons">
          <div className="header__lang-buttons">
            <button
              className="header__lang-button header__lang-button_active"
              onClick={() => setIsLanguagesVisible(!isLanguagesVisible)}
            >
              {currentLanguage}
            </button>
            <div
              className={`header__other-lang-buttons ${
                isLanguagesVisible ? "header__other-lang-buttons_visible" : ""
              }`}
            >
              {renderOtherLangButtons()}
            </div>
          </div>

          <button aria-label="profile" className="header__profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
