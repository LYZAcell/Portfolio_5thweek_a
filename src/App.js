import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Portfolio from './Portfolio'; 
import Photo from './Photo';
import Whitebox from './Boxes';
import Intro from './about me';
import Languages from './langs';
import Goal from './Goal';
import Contacts from './Contacts';
import Favorito from './favsent';
import Experience from './Experiences';
import Etc from './Etc';
import Recommendation from './Recommendation.js';

import WritePage from './WritingPage';
import PostListPage from './PostListPage';
import './nav.css';
import { PostProvider } from "./PostContext.js";
import PostListTable from './PostListTable.js';
import PostDetail from './PostDetail';
import EditPost from './EditPost';

import WriteIDPW from './IDPW.js';
import Signup from './Signup';

export const AppContext = createContext();

function App() {
  const [book, setBook] = useState({});

  {/*실습*/}
  const [name, setName] = useState('');
  function handleChange(e) {
		setName(e.target.value);
    console.log(name);
  };


  const screen_mode = {
    dark_mode: true 
  };

  {/*실습끗*/}

  useEffect(() => {
    axios.get('https://openlibrary.org/works/OL27416W.json')
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('책 데이터를 가져오는 데 실패하였습니다', error);
      });
  }, []);

  return (
    <PostProvider>

    <AppContext.Provider value = {screen_mode}>
    <Router>
      <div>

        <nav>
          <ul className="nav-links">
          <li>
              <Link to ="/Login" className = "nav-link">Login</Link>
            </li>
            <li>
              <Link to="/writing" className="nav-link">글쓰기</Link>
            </li>
            <li>
              <Link to="/postlist" className="nav-link">글목록</Link>
            </li>

            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <header>
                <Portfolio /> {/* Portfolio 컴포넌트 사용 */}
                <Photo src="./dark_isabell.png" alt="여울이" />
              </header>
              <main>
                <Whitebox id="about_me" txt="About Me" />
                <Intro />
                <Favorito />
                <Recommendation book={book} />
                <br /><br />

                <Whitebox id="languages" txt="Languages" />
                <Languages />
                <br /><br /><br /><br />

                <Whitebox id="goal" txt="Goal" />
                <Goal />
                <br /><br /><br /><br />

                <Whitebox id="experience" txt="Experience" />
                <br />
                <Experience exp="2020-21 미애니메이션 시장 비교분석" link="https://github.com/LYZAcell/BigData_2023" eng="2022 big data project" />
                <Experience exp="코딩존 조교24-1" link="#" eng="codingzone assistant 2024-1" />
                <Experience exp="2024 종설: 공지요약 프로젝트" link="https://github.com/LYZAcell/Capstone_Design" eng="Textsummarization ML (24)" />
                <br /><br />

                <Etc exp="포르투갈 교환학생" period="6개월" />
                <Etc exp="Kobras 기획 인턴" period="3개월" />
                <Etc exp="Krbuddy 임원진 및 부장" period="1년 6개월" />
                <Etc exp="멋쟁이 사자처럼" period="2024.03~ing" />
                <br /><br /><br /><br />

                <Whitebox id="contact" txt="Contact" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <Contacts src="./mail icon.png" alt="이메일아이콘" contact="applelgy@naver.com" />
=======
                <Contacts src="./mail icon.png" alt="메일아이콘" contact="applelgy@naver.com" />
>>>>>>> parent of 970b927 (글목록 api 연결완료)
=======
                <Contacts src="./mail icon.png" alt="메일아이콘" contact="applelgy@naver.com" />
>>>>>>> parent of 970b927 (글목록 api 연결완료)
=======
                <Contacts src="./mail icon.png" alt="메일아이콘" contact="applelgy@naver.com" />
>>>>>>> parent of 970b927 (글목록 api 연결완료)
                <Contacts src="./git_icon.png" alt="깃헙아이콘" contact="LYZACell" />
                <Contacts src="./blog_icon.png" alt="블로그아이콘" contact="Stay with me: _ @Brillante" />
                <br /><br /><br /><br />

                <input
                value = {name}
                onChange = {handleChange}/>
                <h2>{name}</h2>


              </main>
            </>
          } />
          <Route path="/writing" element={<WritePage />} />
          <Route path="/postlist" element={<PostListPage />} />
          <Route path="/" element={<PostListTable />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path = "/Login" element = {<WriteIDPW/>} />
          <Route path = "/signup" element = {<Signup/>}/>
        </Routes>
        
      </div>
    </Router>
    </AppContext.Provider>
    </PostProvider>
  );
}

export default App;
