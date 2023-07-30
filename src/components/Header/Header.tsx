import { FC } from "react";
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

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(currentLanguageSelector);
  const language = useAppSelector(languageSelector);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatch(setLanguage(value));
  };

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <div className="header__container">
        <nav className="header__nav">
          <li>
            <button
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
          </li>
        </nav>
        <div className="header__buttons">
          <select
            className="header__language"
            id="lang"
            name="lang"
            onChange={handleSelect}
            defaultValue={currentLanguage}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            {/* <option value="zh">CH</option> */}
          </select>
          <button className="header__profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
