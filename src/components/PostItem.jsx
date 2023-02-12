import Button from "./UI/button/Button";

const PostItem = (props) => {
  return (
    <div className="posts">
      <div className="post_content">
        <h2 className="post_title">
          <strong>{props.post.id}.</strong>
          {props.post.title}
        </h2>
        <p className="post_text">{props.post.body}</p>
      </div>
      <Button onClick={() => props.remove(props.post)}>Delete</Button>
    </div>
  );
};

export default PostItem;
