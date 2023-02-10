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

  const [currPost, setCurrPost] = useState({
    title: '',
    desc: '',
  })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...postsData, { ...currPost, id: Date.now() }])
    setCurrPost({ title: '', desc: '' })
  }

  return (
    <div className='App'>
      <PostList posts={postsData} title={'New posts'} />
      <form className="posts_form">
        <Input
          value={currPost.title}
          onChange={(e) => setCurrPost({ ...currPost, title: e.target.value })}
          placeholder="Title"
        />
        <Input
          value={currPost.desc}
          onChange={(e) => setCurrPost({ ...currPost, desc: e.target.value })}
          placeholder="Decription"
        />
        <Button onClick={addNewPost}>Add post</Button>
      </form>
    </div >
  );
}

export default App;
