import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/feed' element={<FeedPage/>} />
      <Route path='/post' element={<PostPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='*' element={<ErrorPage/>} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default Router