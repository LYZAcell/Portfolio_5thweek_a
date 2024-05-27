import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostContext } from './PostContext';
import "./EditPost.css"

const EditPost = () => {
  const { id } = useParams();
  const { posts, updatePost } = usePostContext();
  const post = posts.find((p) => p.id === parseInt(id));
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost({ id: post.id, title, content });
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="edit-post-container">
      <h2 className="edit-post-title">Edit Post</h2>
      <form className="edit-post-form" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="edit-post-button">
        <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
