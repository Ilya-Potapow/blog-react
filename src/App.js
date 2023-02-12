import React, { useEffect, useState } from "react";
import "./styles/App.css"

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import PostFilter from "./components/PostFilter";
import ModalPosts from "./components/UI/modal/ModalPosts";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";
import { postRequest } from "./API/PostServise";
import Loader from "./components/UI/loader/Loader";
import { UseFetching } from "./hooks/useFetching";
import { getPagesCount } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
  const [postsData, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', search: '' })
  const seachedAndSortedPosts = usePosts(postsData, filter.sort, filter.search)
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [getPosts, postsLoading, postsError] = UseFetching(async () => {
    const response = await postRequest.getPosts(limit, page)
    setPosts(response.data)
    const totaCount = (response.headers['x-total-count'])
    setTotalPages(getPagesCount(totaCount, limit))
  })

  useEffect(() => {
    getPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([newPost, ...postsData])
    setModal(false)
  }
  const removePost = (currPost) => {
    setPosts(postsData.filter(p => p.id !== currPost.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div style={{ paddingTop: '50px' }} className='App'>
      <Button
        onClick={() => setModal(true)}
      > Create post
      </Button>

      <ModalPosts
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </ModalPosts>
      <hr />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postsError &&
        <span style={{ color: 'orange' }}>{postsError}</span>
      }
      {postsLoading
        ? <div style={{ marginTop: '50px' }}><Loader /></div>
        : <PostList remove={removePost} posts={seachedAndSortedPosts} title={'New posts'} />
      }
      <Pagination
        totalPages={totalPages}
        currPage={page}
        changePage={changePage}
      />
    </div >
  );
}

export default App;
