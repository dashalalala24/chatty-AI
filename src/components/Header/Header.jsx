import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__links">
        <p className="header__link">О проекте</p>
        <p className="header__link">Настройки</p>
      </div>
      <button className="header__user"></button>
    </header>
  );
};

export default Header;
