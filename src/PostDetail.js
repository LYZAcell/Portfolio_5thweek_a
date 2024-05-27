import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostContext } from './PostContext';
import "./PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();
  const { posts, deletePost } = usePostContext();
  const post = posts.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!post) {
    return <div className = "Post-not-found">Sorry, We can't find your Post.</div>;
  }

  const handleDelete = () => {
    deletePost(post.id);
    navigate('/');
  };

  return (
    <div className="post-detail-container">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-buttons">
      <button className="edit-button" onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>
      <button className="delete-button"  onClick={handleDelete}>Delete</button>
      </div>
      <p className="post-content">{post.content}</p>

    </div>
  );
};

export default PostDetail;
