import React, { useEffect, useState } from "react";
import LoaderLinear from "../UI/loader/LoaderLinear";
import { useFetching } from "../../hooks/useFetching";
import { useParams } from "react-router-dom";
import { postRequest } from "../../API/PostServise";
import deleteIcon from "./../../assets/icons/x.svg";
import plusIcon from "./../../assets/icons/plus.svg";
import cl from "./../../components/UI/button/Button.module.css";
import "./PostComments.css";
import Button from "../UI/button/Button";
import ModalPosts from "../UI/modal/ModalPosts";
import CommentForm from "../commentsForm/CommentForm";
import likeIcon from "./../../assets/icons/like.svg";

const PostComments = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    fetchCommById(params.id);
  }, []);

  const [fetchCommById, commLoading, commError] = useFetching(async () => {
    const response = await postRequest.getCommById(params.id);
    const updatedComments = response.data.map((comment) => ({
      ...comment,
      likes: 0,
    }));
    setComments(updatedComments);
  });
  const createComment = (newComm) => {
    setComments([{ ...newComm, likes: 0 }, ...comments]);
    setModal(false);
  };
  const incrementLikes = (comment) => {
    const updatedComments = comments.map((c) => {
      if (c.id === comment.id) {
        return { ...c, likes: c.likes + 1 };
      }
      return c;
    });
    setComments(updatedComments);
  };
  const sortComments = (a, b) => b.likes - a.likes;
  const sortedComments = [...comments].sort(sortComments);

  if (commLoading) return <LoaderLinear />;
  return (
    <div className="comments">
      <Button
        className={cl.button_defaultComments}
        onClick={() => setModal(true)}
      >
        <img src={plusIcon}></img>
        Add a note
      </Button>
      {sortedComments.map((comment) => (
        <div className="comments-content" key={comment.id}>
          <div className="comments-body">{comment.body}</div>
          <div className="comments-head">
            {comment.email}
            {comment.userName}
          </div>
          {comment.isNew && (
            <Button
              title="Delete"
              style={{ position: "absolute", right: "5px" }}
              className={cl.button_defaultR}
              onClick={() =>
                setComments((prevComm) =>
                  prevComm.filter((c) => c.id !== comment.id)
                )
              }
            >
              <img src={deleteIcon} alt="" />
            </Button>
          )}
          <Button
            title="Like"
            style={{ position: "absolute", bottom: "10px", right: "5px" }}
            className={cl.button_defaultR}
            onClick={() => incrementLikes(comment)}
          >
            {comment.likes || 0} <img src={likeIcon} alt="" />
          </Button>
        </div>
      ))}
      <ModalPosts visible={modal} setVisible={setModal}>
        <CommentForm create={createComment} />
      </ModalPosts>
    </div>
  );
};
export default PostComments;
