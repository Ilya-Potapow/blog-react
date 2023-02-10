import Button from "./UI/button/Button";

const PostItem = (props) => {

  return (
    <div className="posts">
      <div className="post_content">
        <h2 className="post_title">
          <strong>{props.numb}.</strong>
          {props.posts.title}
        </h2>
        <p className="post_text">{props.posts.desc}</p>
      </div>
      <Button >Delete post</Button>
    </div>
  );
};

export default PostItem;
