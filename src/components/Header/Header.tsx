import { Link } from "react-router-dom";
import { FC } from "react";
import "./Header.css";
import headerLogo from "../../images/header-logo.svg";
import headerProfile from "../../images/header-profile.svg";
import {
  useAppDispatch,
  useAppSelector,
} from "../../services/redux/reduxHooks";
import { setLanguage } from "../../services/redux/slices/language/language";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage
  );
  const language = useAppSelector((state) => state.language.language);

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <nav className="header__nav">
        <li>
          <Link className="header__link" to="/">
            {language[currentLanguage].help}
          </Link>
        </li>
        <li>
          <Link className="header__link" to="/">
            Настройки
          </Link>
        </li>
      </nav>
      <button onClick={() => dispatch(setLanguage("en"))}></button>
      <img
        className="header__profile"
        src={headerProfile}
        alt="Кнопка профиля пользователя"
      />
    </header>
  );
};

export default Header;
