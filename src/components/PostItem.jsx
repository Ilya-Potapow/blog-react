import Button from "./UI/button/Button";
import { Link } from "react-router-dom";
import "./PostItem.css";
import removeIcon from "./../assets/icons/delete.svg";
import cl from "./../components/UI/button/Button.module.css";
import { generateColor } from "./../utils/colorGenerator";

const PostItem = (props) => {
  return (
    <div style={generateColor()} className="post-item">
      <Link to={`/posts/${props.post.id}`}>
        <div className="post_content">
          <h3 className="post_title">{props.post.title}</h3>
          <p className="post_text">{props.post.body}</p>
        </div>
      </Link>
      <div className="button-wrapper">
        <Button
          className={cl.button_defaultR}
          onClick={() => props.remove(props.post)}
        >
          <img className="remove-icon" src={removeIcon}></img>
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
