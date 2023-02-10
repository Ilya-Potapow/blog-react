import Button from "./UI/button/Button";

const PostItem = (props) => {
  return (
    <div className="posts">
      <div className="post_content">
        <h2 className="post_title">
          <strong>{props.posts.id}.</strong>
          {props.posts.title}
        </h2>
        <p className="post_text">{props.posts.body}</p>
      </div>
      <Button textContent="Delete post"></Button>
    </div>
  );
};

export default PostItem;
