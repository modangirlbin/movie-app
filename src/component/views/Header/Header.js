import React,{useState} from 'react';
import '../../../scss/import.scss';

function Header(props) {
  const [isOpen, setMenu] = useState(false);
  
  const toggleMenu = (e) => {
    setMenu(isOpen => !isOpen); // on,off
    console.log(e.target);
    e.target.Attr('aria-haspopup', 'false');
    e.target.parentElement.Attr('aria-hidden', 'true');
  }
  
  function preventAnchor(e) {
    e.preventDefault();
  }

  return (
    <header id='header' className='header'>
      <a href='#none' onClick={preventAnchor} className='link_ticket'>
        <span className='offscreen'>내 예매권 보기</span>
      </a>
      <h1 className='title_logo'>
        <a href='#/'>
          <img src='https://img.megabox.co.kr/static/mb/images/common/ci/logo-white_new.png' alt='메가박스 홈' />
        </a>
      </h1>
      <button className='btn_gnb' type='button' aria-haspopup={isOpen} aria-expanded={isOpen} aria-controls='gnb' onClick={(e)=>toggleMenu(e)}><span className="offscreen">메인 메뉴</span></button>
      <nav id='gnb' className={isOpen ? "gnb on" : "gnb"}>
        <h2 className='offscreen'>메인메뉴</h2>
        <ul className='list_gnb'>
          <li className='item_gnb'><a href="#none" onClick={preventAnchor}>예매하기</a></li>
          <li className='item_gnb'><a href="#none" onClick={preventAnchor}>박스오피스</a></li>
          <li className='item_gnb'><a href="#none" onClick={preventAnchor}>이벤트</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 