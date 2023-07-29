
import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import {
  useAppDispatch,
  useAppSelector,
} from "../../services/redux/reduxHooks";
import { setLanguage } from "../../services/redux/slices/language/language";
        
const Header:FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage
  );
  const language = useAppSelector((state) => state.language.language);
    
  function languageChange() {
    language === 'RU' ? setLanguage('EN') : setLanguage('RU');
  }

  return (
    <header className='header' >
      <img className='header__logo' src={headerLogo} alt='Логотип'/>
      <div className='header__container'>
        <nav className='header__nav'>
          <li>
            <Link className='header__link' to='/'>{language[currentLanguage].help}</Link>
          </li>
        </nav>
        <div className='header__buttons'>
          <button className='header__language' onClick={() => dispatch(setLanguage("en"))}</button>
          <button className='header__profile' />
        </div>
      </div>
    </header>
  );
};

export default Header;
