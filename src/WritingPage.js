import React, { useState } from 'react';
import axios from 'axios';
import { usePostContext } from './PostContext';
import { getCookie } from './Cookie';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, body: content };

    try {
      const token = getCookie('token'); // 쿠키에서 토큰 읽기
      if (!token) {
        throw new Error("토큰이 없습니다. 로그인 해주세요.");
      }

      console.log("요청에 사용될 토큰:", token);

      const response = await axios.post('https://hufs-mutsa-12th.store/blog', post, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        const savedPost = response.data;
        addPost(savedPost);
        setTitle('');
        setContent('');
        alert('글이 성공적으로 저장되었습니다.');
      } else {
        console.error('서버 응답이 성공적이지 않습니다.', response);
        alert('글을 저장하는 데 실패하였습니다.');
      }
    } catch (error) {
      console.error('글을 저장하는 데 실패하였습니다.', error);
      alert('글을 저장하는 데 실패하였습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <br /><br />
      <div style={{ color: "white", textAlign: "center", fontSize: "50px" }}> Write a New Post </div>
      <form onSubmit={handleSubmit}>
        <div>
          <br />
          <label style={{ color: "white", textAlign: "center", fontSize: "50px", margin: '10px' }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
            placeholder='#Write the Title'
            className="input-field"
          />
        </div>
        <br />
        <div>
          <label style={{ color: "white", textAlign: "center", fontSize: "30px", margin: '10px', fontWeight: 'bold' }}>Content</label>
          <br />
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder='Tell your story. How are you?'
            required
            className="textarea-filed"
          />
        </div>
        <button type="submit" className="submit_post_button">Save</button>
      </form>
    </div>
  );
};

export default WritingPage;
