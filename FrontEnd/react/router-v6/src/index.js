import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter, Routes, Route} from './react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home  name="lisi"/>}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);