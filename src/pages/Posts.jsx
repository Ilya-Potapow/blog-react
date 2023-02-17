import React, { useEffect, useState, useRef } from "react";
import { usePosts } from "./../hooks/usePosts";
import { postRequest } from "./../API/PostServise";
import { getPagesCount } from "./../utils/pages";
import { useFetching } from "./../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";

import "./../styles/App.css";

import PostList from "./../components/PostList";
import PostForm from "./../components/PostForm";
import PostFilter from "./../components/PostFilter";
import ModalPosts from "./../components/UI/modal/ModalPosts";
import Button from "./../components/UI/button/Button";
import Loader from "./../components/UI/loader/Loader";
import Pagination from "./../components/UI/pagination/Pagination";

function Posts() {
  const [postsData, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const seachedAndSortedPosts = usePosts(postsData, filter.sort, filter.search);
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastEl = useRef();
  const [checkCondition, setCondition] = useState(true);
  const [fetchPosts, postsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await postRequest.getPosts(limit, page);
      setPosts([...postsData, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  useEffect(() => {
    setPosts([]);
    setLimit(10);
    fetchPosts(limit, page);
  }, [checkCondition]);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  useObserver(lastEl, page < totalPages && checkCondition, postsLoading, () => {
    setPage(page + 1);
  });

  const createPost = (newPost) => {
    setPosts([...postsData, newPost]);
    setModal(false);
  };
  const removePost = (currPost) => {
    setPosts(postsData.filter((p) => p.id !== currPost.id));
  };
  const changePage = (page) => {
    setPosts([]);
    setPage(page);
  };
  const updateCheckbox = (condition) => {
    setCondition(condition);
  };
  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}> Create post</Button>
      <ModalPosts visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalPosts>
      <hr />
      <PostFilter
        filter={filter}
        limit={limit}
        setFilter={setFilter}
        setLimit={setLimit}
        update={updateCheckbox}
        checkCondition={checkCondition}
      />

      {postsError && <span style={{ color: "orange" }}>{postsError}</span>}
      {postsLoading && (
        <div style={{ marginTop: "50px" }}>
          <Loader />
        </div>
      )}
      <PostList
        remove={removePost}
        posts={seachedAndSortedPosts}
        title={"New posts"}
      />

      {seachedAndSortedPosts.length && !checkCondition ? (
        <Pagination
          totalPages={totalPages}
          currPage={page}
          changePage={changePage}
        />
      ) : (
        <div style={{ position: "fixed", top: "50px", right: "25px" }}>
          <Button className="page page_current">{page}</Button>
          <Button onClick={scrollTo}>to top ^</Button>
        </div>
      )}
      <div style={{ height: "15px" }} ref={lastEl}></div>
    </div>
  );
}

export default Posts;
