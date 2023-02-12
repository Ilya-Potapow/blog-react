import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}> Empty posts list</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((p, i) => (
          <CSSTransition
              key={p.id}
              classNames='post'
              timeout={500}
          >
            <PostItem remove={remove} numb={i + 1} post={p} />
          </CSSTransition>
      ))}
      </TransitionGroup>
      
    </div>
  );
};

export default PostList;
