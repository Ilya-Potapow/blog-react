import Button from "./UI/button/Button";
import { Link } from "react-router-dom";
import "./PostItem.css";
import removeIcon from "./../assets/icons/delete.svg";
import cl from "./../components/UI/button/Button.module.css";
import { generateColor } from "./../utils/colorGenerator";

const PostItem = (props) => {
  const buttonHandler = () => {
    props.remove(props.post);
  };
  return (
    <div style={generateColor()} className="post-item">
      <Link to={`/posts/${props.post.id}`}>
        <div className="post_content">
          <h3 className="post_title">
            {/* <strong>{props.post.id}.</strong> */}
            {props.post.title}
          </h3>
          <p className="post_text">{props.post.body}</p>
        </div>
      </Link>
      <div className="button-wrapper">
        <Button className={cl.button_defaultR} onClick={buttonHandler}>
          <img className="remove-icon" src={removeIcon}></img>
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
