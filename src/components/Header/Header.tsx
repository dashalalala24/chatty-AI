import { Link } from 'react-router-dom';
import { FC } from 'react';
import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import headerProfile from '../../images/header-profile.svg';

const Header:FC = () => {
  return (
    <header className='header' >
      <img className='header__logo' src={headerLogo} alt='Логотип'/>
      <nav className='header__nav'>
        <li>
          <Link className='header__link' to='/'>О проекте</Link>
        </li>
        <li>
          <Link className='header__link' to='/'>Настройки</Link>
        </li>
      </nav>
      <img className='header__profile' src={headerProfile} alt='Кнопка профиля пользователя'/>
    </header>
  );
}

export default Header;
