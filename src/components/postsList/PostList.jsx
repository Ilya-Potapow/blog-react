import React from "react";
import { generateColor } from "../../utils/colorGenerator";
import PostItem from "../PostItem";
import "./PostsList.css";

const PostList = ({ posts, remove }) => {
  return (
    <section className="posts-content">
      <div className="posts-items__wrapper">
        {posts.map((p, i) => (
          <PostItem
            style={generateColor()}
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
