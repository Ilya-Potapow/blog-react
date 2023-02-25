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
import CommentForm from "../CommentForm";


const PostComments = () => {
  const params = useParams();
  const [comm, setComm] = useState([]);
  const [modal, setModal] = useState(false);

  const [fetchCommById, commLoading, commError] = useFetching(async () => {
    const response = await postRequest.getCommById(params.id);
    setComm(response.data);
  });
  const createComment = (newComm) => {
    setComm([newComm, ...comm]);
    setModal(false);
  };
  useEffect(() => {
    fetchCommById(params.id);
  }, []);

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
      {comm.map((comment) => (
        <div className="comments-content" key={comment.id}>
          <div className="comments-body">{comment.body}</div>
          <div className="comments-head">
            {comment.email}
            {comment.userName}
          </div>
          <Button
            style={{ position: "absolute", right: "5px" }}
            className={cl.button_defaultR}
            onClick={() => setComm(comm.filter((c) => c.id !== comment.id))}
          >
            <img src={deleteIcon} alt="" />
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
