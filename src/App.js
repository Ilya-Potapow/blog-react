import React from "react";
import { useState } from "react";
import "./styles/App.css"

import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";



function App() {
  const [postsData, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

  return (
    <div className='App'>
      <PostList posts={postsData} title={'New posts'} />
      <form className="posts_form">
        <Input placeholder="Title" />
        <Input placeholder="Decription" />
        <Button textContent="Add post"></Button>
      </form>
    </div >
  );
}

export default App;
