import React from "react";

import CurrentPost from "./postItem/CurrentPost";
import PostComments from "./postComments/PostComments";

const PostPage = () => {
  return (
    <div>
      <CurrentPost />
      <PostComments />
    </div>
  );
};

export default PostPage;
