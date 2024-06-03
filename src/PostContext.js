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
