import React from "react";

import PostItem from "../PostItem";
import "./PostsList.css";

const PostList = ({ posts, remove }) => {
  return (
    <section className="posts-content">
      <div className="posts-items__wrapper">
        {posts.map((p, i) => (
          <PostItem
            key={i}
            remove={remove}
            numb={i + 1}
            post={p}
          />
        ))}
      </div>
    </section>
  );
};

export default PostList;
