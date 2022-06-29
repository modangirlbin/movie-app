import React from 'react';
import '../../../scss/import.scss';
// import logo from '../../../../img/logo.png';

function Header(props) {
  return (
    <header id='header' className='header'>
      <h1 className='title_logo'>
        <a href="#none" alt="홈으로 가기">
          {/* <img src={logo} alt="" /> */}
          Movie App
        </a>
      </h1>
      <nav id='gnb' className='gnb'>
        <h2 className='offscreen'>메인메뉴</h2>
        <ul className='list_gnb'>
          <li className='item_gnb'><a href="#none">favorite</a></li>
          <li className='item_gnb'><a href="#none">my</a></li>
          <li className='item_gnb'><a href="#none">about us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 