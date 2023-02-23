import React from "react";
import contentImage from "./../../../assets/postsPage/top_logo.jpg";
import "./PostsHead.css";

const PostsHead = () => {
  return (
    <section className="posts-head">
      {/* <img src={contentImage} alt="" /> */}
      <h2 className="posts-head__title">
        A few words about this blog platform, Ghost, and how this site was made
      </h2>
      <div className="posts-head__subtitle">
        Luckily, in the middle of all that, there are some pockets of content
        that offer delightfully valuable contrast to cursory wisdom in some of
        the established channels
      </div>
      <span className="posts-head__line"></span>
    </section>
  );
};

export default PostsHead;
