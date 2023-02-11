import React from "react";
import { useState, useMemo } from "react";
import "./styles/App.css"

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import PostFilter from "./components/PostFilter";
import ModalPosts from "./components/UI/modal/ModalPosts";
import Button from "./components/UI/button/Button";

function App() {
  const [postsData, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);
  const [filter, setFilter] = useState({ sort: '', search: '' })

  const sortedPosts = useMemo(() => filter.sort
    ? [...postsData].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    : postsData, [filter.sort, postsData])

  const seachedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.search))
  }, [sortedPosts, filter.search])

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
