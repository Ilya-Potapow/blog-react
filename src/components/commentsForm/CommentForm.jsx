import React from "react";
import { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import TextArea from "../UI/textArea/TextArea";
import "./CommentForm.css";

const CommentForm = ({ create }) => {
  const [currComment, setCurrComment] = useState({ userName: "", body: "" });

  const addComment = (e) => {
    e.preventDefault();
    const newComm = {
      ...currComment,
      isNew: true,
      id: new Date(),
    };
    create(newComm);
    setCurrComment({ userName: "", body: "" });
  };

  return (
    <div>
      <form className="comm_form">
        <Input
          value={currComment.userName}
          onChange={(e) =>
            setCurrComment({ ...currComment, userName: e.target.value })
          }
          placeholder="Your name"
        />
        <TextArea
          value={currComment.body}
          onChange={(e) =>
            setCurrComment({ ...currComment, body: e.target.value })
          }
          placeholder="Type a comment"
        />
        {currComment.userName && currComment.body ? (
          <Button
            style={{ border: "1px solid #80808091" }}
            onClick={addComment}
          >
            Publish
          </Button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default CommentForm;
