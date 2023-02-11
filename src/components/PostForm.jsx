import React from "react";
import { useState } from "react";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

const PostForm = ({ create }) => {
  const [currPost, setCurrPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...currPost,
      id: Date.now(),
    };
    create(newPost);
    setCurrPost({ title: "", body: "" });
  };

  return (
    <form className="posts_form">
      <Input
        value={currPost.title}
        onChange={(e) => setCurrPost({ ...currPost, title: e.target.value })}
        placeholder="Title"
      />
      <Input
        value={currPost.body}
        onChange={(e) => setCurrPost({ ...currPost, body: e.target.value })}
        placeholder="Decription"
      />
      <Button onClick={addNewPost}>Add post</Button>
    </form>
  );
};

export default PostForm;
