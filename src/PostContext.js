<<<<<<< HEAD
// PostContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://hufs-mutsa-12th.store/blog/') // API 엔드포인트를 실제 URL로 변경하세요
        .then(response => {
            const formattedPosts = response.data.map(post => ({
                id: post.id,
                title: post.title,
                content: post.body, // 'body'를 'content'로 매핑
                author: `User ${post.user}`, // 사용자 정보를 'author'로 매핑
                date: new Date().toLocaleDateString() // 임의의 날짜를 추가
            }));
            setPosts(formattedPosts);
        })
        .catch(error => {
            console.error('Error fetching posts', error);
        });
}, []);

return (
  <PostContext.Provider value={{ posts, setPosts }}>
      {children}
  </PostContext.Provider>
);
};

export const usePostContext = () => useContext(PostContext);
=======
import React, { createContext, useState, useContext } from 'react';

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: '동숲 패키지 안내', content: '우리 패키지를 이용해줘서 고마워 너굴. 앞으로는 콩돌이 밤돌이가 다 설명해줄거야 너굴. 밤 9시에 캠프 파이어가 있으니 나뭇가지 10개만 주워줄 수 있어 너굴? ', author: '너굴', date: '2023-05-27' },
    { id: 2, title: '지금 잡은 가리비, 나 주게', content: '좋은 것과 바꿔주겠네. 인생 상담 환영.', author: '해탈한', date: '2023-05-28' },
    // 초기 게시글 데이터 추가 가능
  ]);

  const addPost = (post) => {
    const newPost = { ...post, id: posts.length + 1, date: new Date().toISOString().split('T')[0] };
    setPosts([...posts, newPost]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
>>>>>>> parent of 970b927 (글목록 api 연결완료)
