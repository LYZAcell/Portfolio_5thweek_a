// PostListPage.js
import React from 'react';
import PostListTable from './PostListTable';

const PostListPage = () => {
  return (
    <div>
      <br/>
      <h1 style={{ color: "white", textAlign: "center", fontSize : "30px"}}>Post List</h1>
      <br/>
      <PostListTable />
    </div>
  );
};

export default PostListPage;


{/*const PostListPage = () => {

  return (
    <div>
      <h1> test print</h1>
    </div>
  );
};

export default PostListPage;*/}
