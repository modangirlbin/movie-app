import React from 'react';
import '../../../scss/import.scss';

function Footer(props) {
  return (
    <footer id='footer' className='footer'>
      <div className='inner_footer'>
        <address className='contact'>contact me: inarainbow@naver.com</address>
        <span className='logo_footer'>Movie App</span>
      </div>
    </footer>
  );
}

export default Footer; 