import React from "react";
import { useState, useMemo } from "react";
import "./styles/App.css"

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import PostFilter from "./components/PostFilter";
import ModalPosts from "./components/UI/modal/ModalPosts";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [postsData, setPosts] = useState();
  const [filter, setFilter] = useState({ sort: '', search: '' })
  const seachedAndSortedPosts = usePosts(postsData, filter.sort, filter.search)


  const createPost = (newPost) => {
    setPosts([...postsData, newPost])
    setModal(false)
  }
  const removePost = (currPost) => {
    setPosts(postsData.filter(p => p.id !== currPost.id))
  }
  const [modal, setModal] = useState(false)

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
      <PostList remove={removePost} posts={seachedAndSortedPosts} title={'New posts'} />



    </div >
  );
}

export default App;
