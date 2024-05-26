//WritingPage.js
import React, { useState } from 'react';
import { usePostContext } from './PostContext';
import './WritingPage.css';

const WritingPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = usePostContext();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, content }; // title과 content 함께 추가
    addPost(post);
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
          <label style={{ color: "white", textAlign: "center", fontSize : "50px", margin: '10px'}}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
            placeholder='#Write the Title'
            className="input-field" // CSS 꾸미기
          />
        </div>
        <br/>
        <div>
          <label style={{ color: "white", textAlign: "center", fontSize : "30px", margin: '10px', fontWeight: 'bold'}}>Content</label>
          <br/>
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder='Tell your story. How are you?'
            required
            className= "textarea-filed"
          />
        </div>
        <button type="submit" className = "submit_post_button">Save</button>
      </form>
    </div>
  );
};

export default WritingPage;
