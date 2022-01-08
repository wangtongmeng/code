import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter, Routes, Route} from './react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import Post from './components/Post'

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home  name="lisi"/>}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/post/:id/:num" element={<Post />}></Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);