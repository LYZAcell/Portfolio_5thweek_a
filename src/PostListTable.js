import React from 'react';
import { usePostContext } from './PostContext';
import "./Post_table.css";
import { useNavigate } from 'react-router-dom';

const PostListTable = () => {
  const { posts } = usePostContext();
  const navigate = useNavigate();

  const truncateContent = (content, maxLength) => {
    return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index} onClick={() => navigate(`/post/${post.id}`)}>
              <td>{post.title}</td>
              <td>{truncateContent(post.content, 50)}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostListTable;
