import React from 'react'
import {  Route, Routes } from "react-router-dom";
import About from "./../pages/About";
import Posts from "./../pages/Posts";
import Error from "./../pages/Error";
import PostPage from './PostPage';

const AppRouter = () => {
  return (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
  )
}

export default AppRouter