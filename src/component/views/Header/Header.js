import React,{useState} from 'react';
import '../../../scss/import.scss';
// import logo from '../../../../img/logo.png';

function Header(props) {
  const [isOpen, setMenu] = useState(false);
  
  const toggleMenu = (e) => {
    setMenu(isOpen => !isOpen); // on,off
    console.log(e.target);
    e.target.Attr('aria-haspopup', 'false')
  }

  return (
    <header id='header' className='header'>
      <h1 className='title_logo'>
        <a href='#none' alt='메가박스 홈'>
          <img src='https://img.megabox.co.kr/static/mb/images/common/ci/logo-white_new.png' alt='' />
        </a>
      </h1>
      <a href='#none' className='link_ticket'>
        <span className='offscreen'>내 예매권 보기</span>
      </a>
      <button className='btn_gnb' type='button' aria-haspopup={isOpen} aria-expanded={isOpen} aria-controls='gnb' onClick={(e)=>toggleMenu(e)}><span className="offscreen">메인 메뉴</span></button>
      <nav id='gnb' className={isOpen ? "gnb on" : "gnb"}>
        <h2 className='offscreen'>메인메뉴</h2>
        <ul className='list_gnb'>
          <li className='item_gnb'><a href="#none">예매하기</a></li>
          <li className='item_gnb'><a href="#none">박스오피스</a></li>
          <li className='item_gnb'><a href="#none">이벤트</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 