import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((p, i) => (
        <PostItem remove={remove} numb={i + 1} post={p} key={p.id} />
      ))}
    </div>
  );
};

export default PostList;
