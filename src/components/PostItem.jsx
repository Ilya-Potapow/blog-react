import Button from "./UI/button/Button";

const PostItem = (props) => {
  return (
    <div className="posts">
      <div className="post_content">
        <h2 className="post_title">
          <strong>{props.numb}.</strong>
          {props.post.title}
        </h2>
        <p className="post_text">{props.post.body}</p>
      </div>
      <Button onClick={() => props.remove(props.post)}>Delete post</Button>
    </div>
  );
};

export default PostItem;
