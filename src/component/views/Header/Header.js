import React,{useState, useEffect} from 'react';
import '../../../scss/import.scss';

export default function Header(props) {
  // 햄버거 메뉴 열기,닫기
  const [isOpen, setMenu] = useState(false);
  
  const toggleMenu = (e) => {
    setMenu(isOpen => !isOpen); // on,off
    e.target.Attr('aria-haspopup', 'false');
    e.target.parentElement.Attr('aria-hidden', 'true');
  }

  // 스크롤시 헤더색 변경
  const [ scroll, setScroll ] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  
  // 링크막기
  const preventAnchor = (e) => {
    e.preventDefault();
  }

  return (
    <header id='header' className={scroll ? "header on" : "header"}>
      <a href='#none' onClick={preventAnchor} className='link_ticket'>
        <span className='offscreen'>내 예매권 보기</span>
      </a>
      <h1 className='tit_logo'>
        <a href='#/'>
          <img src='https://img.megabox.co.kr/static/mb/images/common/ci/logo-white_new.png' alt='메가박스 홈' />
        </a>
      </h1>
      <button className='btn_gnb' type='button' aria-haspopup={isOpen} aria-expanded={isOpen} aria-controls='gnb' onClick={(e)=>toggleMenu(e)}><span className="offscreen">메인 메뉴</span></button>
      <nav className={isOpen? "nav_gnb on": "nav_gnb"}>
        <h2 className='offscreen'>로그인 페이지</h2>
        <section>
          <h3 className='offscreen'>로그인 메뉴</h3>
          <section className='area_sns'>
            <strong className='tit_sns'>SNS 계정으로 로그인</strong>
            <button type='botton' className='btn_sns btn_kakao'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="4 4 40 40">
                <path fill="#FFDA00" d="M0 0H48V48H0z"/>
                <path fill="#000" d="M23.955 12C16.212 12 10 16.997 10 23.074c0 3.916 2.61 7.338 6.527 9.318L15.222 37.3c-.045.135 0 .315.09.405.09.09.18.135.27.135.09 0 .18-.045.27-.09l5.672-3.826c.81.135 1.666.18 2.521.18C31.743 34.103 38 29.106 38 23.029 37.91 16.907 31.653 12 23.955 12z"/>
              </svg>
              <span className='offscreen'>카카오톡으로 로그인</span>
            </button>
            <button type='botton' className='btn_sns btn_naver'>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 22 20">
                  <path fill="#FFF" fill-rule="evenodd" d="M14.496 0L14.496 10.169 7.528 0 0 0 0 20 7.504 20 7.504 9.987 14.496 20 22 20 22 0z"/>
              </svg>
              <span className='offscreen'>네이버로 로그인</span>
            </button>
            <button type='botton' className='btn_sns btn_facebook'>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 14 25">
                <path fill="#FFF" fill-rule="evenodd" d="M12.418 14.063l.689-4.525H8.799V6.602c0-1.238.601-2.444 2.531-2.444h1.959V.306S11.51 0 9.812 0C6.263 0 3.944 2.167 3.944 6.09v3.448H0v4.525h3.944V25H8.8V14.063h3.62z"/>
              </svg>
              <span className='offscreen'>페이스북으로 로그인</span>
            </button>
            <button type='botton' className='btn_sns btn_apple'>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 20 23">
                <path fill="#FFF" fill-rule="evenodd" d="M14.004 5.251l.332.002c2.269.119 3.343 1.273 4.577 2.467-1.314.994-2.706 2.427-2.547 4.695.199 2.268 1.711 3.621 3.223 4.417 0 1.393-2.587 5.73-5.332 6.128-1.592.239-2.07-.955-4.099-.955-1.631 0-2.109.955-4.098.995C3.234 23 .21 16.991.01 12.654-.188 8.634 2.32 5.77 5.184 5.451c3.303-.358 3.184.916 4.775.876 1.711-.04 2.547-1.154 4.377-1.074zM14.058 0c.437 2.666-1.751 5.73-4.656 5.57-.199-1.59.876-5.053 4.656-5.57z"/>
              </svg>
              <span className='offscreen'>애플로 로그인</span>
            </button>
          </section>
          <section className='area_email'>
            <a href='#none' className="link_login" onClick={preventAnchor}>이메일로 로그인</a>
            <a href='#none' onClick={preventAnchor} className='link_join'>이메일로 회원가입</a>
            <a href='#none' className="link_key" onClick={preventAnchor}>아이디/비밀번호찾기</a>
          </section>
        </section>
        <section>
          <h3 className='offscreen'>기타 메뉴</h3>
          <ul className='list_gnb'>
            <li className='item_gnb'><a href="#none" onClick={preventAnchor} className='link_gnb'>박스오피스</a></li>
            <li className='item_gnb'><a href="#none" onClick={preventAnchor} className='link_gnb'>이벤트</a></li>
            <li className='item_gnb'><a href="#none" onClick={preventAnchor} className='link_gnb'>고객센터</a></li>
          </ul>
        </section>
        <button type='button' className='btn_close' onClick={(e)=>toggleMenu(e)}>
          <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" font-size="30" color="#000000"><path d="M6 6L24 24M6 24L24 6" stroke="currentColor" stroke-miterlimit="10" vector-effect="non-scaling-stroke"></path></svg>
          <span className='offscreen'>닫기</span>
        </button>
      </nav>
    </header>
  );
}