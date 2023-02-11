import React from "react";
import { useState } from "react";
import "./styles/App.css"

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";




function App() {
  const [postsData, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...postsData, newPost])
  }
  return (
    <div className='App'>
      <PostList posts={postsData} title={'New posts'} />
      <PostForm create={createPost} />
    </div >
  );
}

export default App;
