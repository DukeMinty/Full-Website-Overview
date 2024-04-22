import './App.css';
import axios from "axios";
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

//using app to handle routes, add as many routes as we need
function App() {


  return (
    <div className="App">
      <Router>
        <Link to="/createpost">Create A Post</Link>
        <Link to="/">Home Page</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>);
}

export default App;

