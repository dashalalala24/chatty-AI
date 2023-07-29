import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import './Header.css';
import headerLogo from '../../images/header-logo.svg';

const Header:FC = () => {
  const [language, setLanguage] = useState('RU');

  function languageChange() {
    language === 'RU' ? setLanguage('EN') : setLanguage('RU');
  }

  return (
    <header className='header' >
      <img className='header__logo' src={headerLogo} alt='Логотип'/>
      <div className='header__container'>
        <nav className='header__nav'>
          <li>
            <Link className='header__link' to='/'>Справка</Link>
          </li>
        </nav>
        <div className='header__buttons'>
          <button className='header__language' onClick={languageChange}>{language}</button>
          <button className='header__profile' />
        </div>
      </div>
    </header>
  );
}

export default Header;
