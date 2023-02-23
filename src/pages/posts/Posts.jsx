import React, { useEffect, useState, useRef } from "react";
import { usePosts } from "../../hooks/usePosts";
import { postRequest } from "../../API/PostServise";
import { getPagesCount } from "../../utils/pages";
import { useFetching } from "../../hooks/useFetching";
import { useObserver } from "../../hooks/useObserver";

import "../../styles/App.css";

import PostList from "../../components/postsList/PostList";
import PostForm from "../../components/PostForm";
import PostFilter from "../../components/PostFilter";
import ModalPosts from "../../components/UI/modal/ModalPosts";
import Button from "../../components/UI/button/Button";
import Loader from "../../components/UI/loader/Loader";
import Pagination from "../../components/UI/pagination/Pagination";
import PostsHead from "../../components/UI/postsHead/PostsHead";

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
    setLimit(10);
    setPosts([]);
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
    window.scrollTo({ top: 550, behavior: "smooth" });
  };

  return (
    <main className="App">
      <PostsHead></PostsHead>
      <section className="posts-content">
        {/* <Button onClick={() => setModal(true)}> Create post</Button> */}
        <ModalPosts visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </ModalPosts>

        {postsError && <span style={{ color: "orange" }}>{postsError}</span>}
        {postsLoading && (
          <div style={{ marginTop: "50px" }}>
            <Loader />
          </div>
        )}
        <div>
          {seachedAndSortedPosts.length ? (
            <h2 className="posts-items__title">All articles</h2>
          ) : (
            <h2 className="posts-items__title">Empty posts list..</h2>
          )}
          <PostFilter
            filter={filter}
            limit={limit}
            setFilter={setFilter}
            setLimit={setLimit}
            update={updateCheckbox}
            checkCondition={checkCondition}
          ></PostFilter>
          <PostList
            remove={removePost}
            posts={seachedAndSortedPosts}
            title={"All articles"}
          ></PostList>
        </div>

        {seachedAndSortedPosts.length && !checkCondition ? (
          <Pagination
            totalPages={totalPages}
            currPage={page}
            changePage={changePage}
          ></Pagination>
        ) : (
          <div style={{ position: "fixed", top: "50px", right: "25px" }}>
            <Button className="page page_current">{page}</Button>
            <Button onClick={scrollTo}>to top ^</Button>
          </div>
        )}
        <div style={{ height: "15px" }} ref={lastEl}></div>
      </section>
    </main>
  );
}

export default Posts;
