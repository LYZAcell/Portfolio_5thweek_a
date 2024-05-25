import React, { useState } from 'react';
import './WritingPage.css';

const WritingPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 글 저장 로직 추가
    console.log('Title:', title);
    console.log('Content:', content);
    // 상태 초기화
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <br/><br/>
      <div style={{ color: "white", textAlign: "center", fontSize : "50px"}}> Write a New Post </div>
      <form onSubmit={handleSubmit}>
        <div>
          <br/>
          <label style={{ color: "white", textAlign: "center", fontSize : "50px"}}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
            className="input-field" // CSS 꾸미기
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default WritingPage;
