import React from 'react';
import Portfolio from './Portfolio'; // Portfolio.js 파일을 불러옴
import Photo from './Photo';
import Whitebox from './Boxes';
import Intro from './about me';
import Languages from './langs';
import Goal from './Goal';
import Contacts from './Contacts';
import Favorito from './favsent';
import Experience from './Experiences';
import Etc from './Etc';
import './nav.css'

function App() {
  return (
    <div>
      {/*##################헤더###############*/}
      <nav>
      <ul>
        <li><a href="#about_me">About Me</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#goal">Goal</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>
      <header>
        <Portfolio /> {/* Portfolio 컴포넌트 사용 */}
        <Photo src = "./dark_isabell.png" alt = "여울이"></Photo>
      </header>

      {/*#################바디#################*/}



      <main>
        <Whitebox id="about_me" txt="About Me"/>
        <Intro/>
        <Favorito/>
        <br/><br/>

        <Whitebox id="languages" txt="Languages"/>
        <Languages/>
        <br/><br/><br/><br/>

        <Whitebox id="goal" txt="Goal"/>
        <Goal/>
        <br/><br/><br/><br/>

        <Whitebox id="experience" txt="Experience"/>
        <br></br>
        <Experience exp="2020-21 미애니메이션 시장 비교분석" link="https://github.com/LYZAcell/BigData_2023" eng="2022 big data project"/>
        <Experience exp="코딩존 조교24-1" link="#" eng="codingzone assistant 2024-1"/>
        <Experience exp="2024 종설: 공지요약 프로젝트" link="https://github.com/LYZAcell/Capstone_Design" eng="Textsummarization ML (24)"/>
        <br/><br/>

        <Etc exp="포르투갈 교환학생" period="6개월"/>
        <Etc exp="Kobras 기획 인턴" period="3개월"/>
        <Etc exp="Krbuddy 임원진 및 부장" period="1년 6개월"/>
        <Etc exp="멋쟁이 사자처럼" period="2024.03~ing"/>
        <br/><br/><br/><br/>

        <Whitebox id="contact" txt="Contact"/>
        <Contacts src="./mail icon.png" alt="메일아이콘" contact="applelgy@naver.com"/>
        <Contacts src="./git_icon.png" alt="깃헙아이콘" contact="LYZACell"/>
        <Contacts src="./blog_icon.png" alt="블로그아이콘" contact="Stay with me: _ @Brillante"/>
        <br/><br/><br/><br/>

      </main>
    </div>
  );
}

export default App;
