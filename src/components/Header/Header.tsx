import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import './Header.css';
import headerLogo from '../../images/header-logo.svg';

const Header:FC = () => {
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
          <div className='header__mainselection'>
            <select className='header__select' >
              <option className='header__language' value="RU">RU</option>
              <option className='header__language' value="EN">EN</option>
            </select>
          </div>
          <button className='header__profile' />
        </div>
      </div>
    </header>
  );
}

export default Header;
