import React from "react";
import { useState } from "react";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

const CommentForm = ({ create }) => {
  const [currComment, setCurrComment] = useState({ userName: "", body: "" });

  const addComment = (e) => {
    e.preventDefault();
    const newComm = {
      ...currComment,
      id: Date.now(),
    };
    create(newComm);
    setCurrComment({ userName: "", body: "" });
  };

  return (
    <form className="posts_form">
      <Input
        value={currComment.userName}
        onChange={(e) => setCurrComment({ ...currComment, userName: e.target.value })}
        placeholder="userName"
      />
      <textarea
        value={currComment.body}
        onChange={(e) => setCurrComment({ ...currComment, body: e.target.value })}
        placeholder="Comment"
      />
      <Button onClick={addComment}>Add comments</Button>
    </form>
  );
};

export default CommentForm;
