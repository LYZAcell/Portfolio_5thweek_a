import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostContext } from './PostContext';

const PostDetail = () => {
  const { id } = useParams();
  const { posts, deletePost } = usePostContext();
  const post = posts.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleDelete = () => {
    deletePost(post.id);
    navigate('/');
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostDetail;
