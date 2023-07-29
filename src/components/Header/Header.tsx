import { Link } from "react-router-dom";
import { FC } from "react";
import "./Header.css";
import headerLogo from "../../images/header-logo.svg";
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
            <Link className="header__link" to="/">
              {language[currentLanguage].help}
            </Link>
          </li>
        </nav>
        <div className="header__buttons">
          <select
            className="header__language"
            id="lang"
            name="lang"
            onChange={handleSelect}
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
