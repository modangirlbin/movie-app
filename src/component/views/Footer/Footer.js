import React from 'react';

function Footer(props) {
  // 링크막기
  const preventAnchor = (e) => {
    e.preventDefault();
  }
  return (
    <footer id='footer' className='footer'>
      <div className='inner_footer'>
        <h2 class='offscreen'>사이트 이용정보</h2>
        <ul className='list_policy'>
          <li><a href='#none' className='link_policy' onClick={preventAnchor}>이용약관</a></li>
          <li><a href='#none' className='link_policy' onClick={preventAnchor}>이용안내</a></li>
          <li><a href='#none' className='link_policy' onClick={preventAnchor}>개인정보처리방침</a></li>
          <li><a href='#none' className='link_policy' onClick={preventAnchor}>기업고객</a></li>
          <li><a href='#none' className='link_policy' onClick={preventAnchor}>문의하기</a></li>
          <li><a href='#none' className='link_policy' onClick={preventAnchor}>공정위사업자정보</a></li>
        </ul>
        <p className='notice_policy'>본 사이트에서 사용되는 콘텐츠의 저작권은 콘텐츠 제공자에게 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 처벌될 수 있습니다.</p>
        <strong className='logo_footer'>Movie App</strong>
      </div>
    </footer>
  );
}

export default Footer; 