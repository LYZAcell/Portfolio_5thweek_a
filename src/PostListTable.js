// PostListTable.js
import React from 'react';
import { usePostContext } from './PostContext';
import "./Post_table.css"

const PostListTable = () => {
  const { posts } = usePostContext();

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
          <tr key={index}>
            <td>{post.title}</td>
            <td>{post.content}</td>
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
