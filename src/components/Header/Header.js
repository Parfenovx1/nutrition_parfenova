import { useState } from 'react';
import './Header.css';
import logoSrc from '../../assets/Logo.svg';

function Header() {
  const [activeLang, setActiveLang] = useState('UA');

  return (
    <header className="header">
      <div className="logo">
        <img alt="svg" className="logo" src={logoSrc} />
      </div>
      
      <div className="nav-menu">
        <div className="menu-items">
          <a href="#about">Про мене</a>
          <a href="#services">Послуги</a>
          <a href="#reviews">Відгуки</a>
          <a href="#contacts">Контакти</a>
        </div>
        <div className="language-switcher">
          <span 
            className={activeLang === 'UA' ? 'active' : ''} 
            onClick={() => setActiveLang('UA')}
          >
            UA
          </span>
          <span 
            className={activeLang === 'RU' ? 'active' : ''} 
            onClick={() => setActiveLang('RU')}
          >
            RU
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header; 