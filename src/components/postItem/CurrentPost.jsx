import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { postRequest } from "../../API/PostServise";
import { useParams } from "react-router-dom";
import Loader from "../UI/loader/Loader";
import "./CurrentPost.css";

const CurrentPost = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, loading, error] = useFetching(async () => {
    const response = await postRequest.getPostById(params.id);
    setPost(response.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="current-post">
      <h2 className="current-post__title">{post.title}</h2>
      <div className="posts-head__subtitle">
        Luckily, in the middle of all that, there are some pockets of content
        that offer delightfully valuable contrast to cursory wisdom in some of
        the established channels
      </div>
      <span className="posts-head__line"></span>
      <div className="current-post__body">{post.body}</div>
    </div>
  );
};

export default CurrentPost;
