import React, { useEffect, useState, useRef } from "react";
import { usePosts } from "./../hooks/usePosts";
import { postRequest } from "./../API/PostServise";
import { getPagesCount } from "./../utils/pages";
import { useFetching } from "./../hooks/useFetching";

import "./../styles/App.css";

import PostList from "./../components/PostList";
import PostForm from "./../components/PostForm";
import PostFilter from "./../components/PostFilter";
import ModalPosts from "./../components/UI/modal/ModalPosts";
import Button from "./../components/UI/button/Button";
import Loader from "./../components/UI/loader/Loader";
import Pagination from "./../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import SortItem from "../components/UI/sort/SortItem";

function Posts() {
  const [postsData, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const seachedAndSortedPosts = usePosts(postsData, filter.sort, filter.search);
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastEl = useRef();

  const [fetchPosts, postsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await postRequest.getPosts(limit, page);
      setPosts([...postsData, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  useObserver(lastEl, page < totalPages, postsLoading, () => {
    setPage(page + 1);
    console.log(page);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...postsData, newPost]);
    setModal(false);
  };
  const removePost = (currPost) => {
    setPosts(postsData.filter((p) => p.id !== currPost.id));
  };
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}> Create post</Button>

      <ModalPosts visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalPosts>
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      <SortItem
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Load posts"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Load all" },
        ]}
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
      <div ref={lastEl} style={{ height: "10px", background: "blue" }}></div>
      <Pagination
        totalPages={totalPages}
        currPage={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
