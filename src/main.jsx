import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import WritePage from './writePage';
import PostListPage from './PostListPage';
import WriteIDPW from './IDPW';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* 기본 루트 설정 */}
        <Route path="/write" element={<WritePage />} /> {/* 글쓰기 페이지 설정 */}
        <Route path="/PostListPage" element={<PostListPage />} /> {/* 게시판 페이지 설정 */}
        <Route path = "./IDPW" element = {<WriteIDPW />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
