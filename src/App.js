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
  const removePost = (currPost) => {
    setPosts(postsData.filter(p => p.id !== currPost.id))
  }
  return (
    <div className='App'>
      <PostForm create={createPost} />
      {postsData.length
        ? <PostList remove={removePost} posts={postsData} title={'New posts'} />
        : <h1 style={{ textAlign: "center" }}> Empty posts list</h1>
      }

    </div >
  );
}

export default App;
