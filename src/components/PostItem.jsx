import Button from "./UI/button/Button";
import { useNavigate  } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate()
  return (
    <div className="posts">
      <div className="post_content">
        <h2 className="post_title">
          <strong>{props.post.id}.</strong>
          {props.post.title}
        </h2>
        <p className="post_text">{props.post.body}</p>
      </div>
      <div style={{display: "flex"}}>
      <Button onClick={() => props.remove(props.post)}>Delete</Button>
      <Button 
      style={{
        marginLeft: '10px'
      }}
       onClick={() => router(`/posts/${props.post.id}`)}
       >...
       </Button>
      </div>
    </div>
  );
};

export default PostItem;
