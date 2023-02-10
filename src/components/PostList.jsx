import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, numb } ) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((p, i) => (
        <PostItem numb={i + 1} posts={p} key={p.id} />
      ))}
    </div>
  );
};

export default PostList;
