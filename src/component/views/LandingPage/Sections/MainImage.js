import React from 'react';
import '../../../../scss/import.scss';

function MainImage(props) {
  return (
    <section className="main_visual">
      <div className="img_visual">
        <img className="img" src="https://image.tmdb.org/t/p/w1280/1heBUD8o0sgdqLWyeXkylR2POKb.jpg" alt="미니언즈2" />
      </div>
      <div className="info_visual">
        <h2 className="tit_visual">미니언즈 2</h2>
        <p className="desc_visual">세계 최고의 슈퍼 악당을 꿈꾸는 미니보스 ‘그루’와 그를 따라다니는 미니언들. 어느 날 그루는 최고의 악당 조직 ‘빌런6’의 마법 스톤을 훔치는 데 성공하지만 뉴페이스 미니언 ‘오토’의 실수로 스톤을 잃어버리고 빌런6에게 납치까지 당한다. 미니보스를 구하기 위해 잃어버린 스톤을 되찾아야 하는 ‘오토’, 그리고 쿵푸를 마스터해야 하는 ‘케빈’, ‘스튜어트’, ‘밥’! 올 여름 극장가를 점령할 MCU(미니언즈 시네마틱 유니버스)가 돌아온다!</p>
      </div>
    </section>
  )
}

export default MainImage;