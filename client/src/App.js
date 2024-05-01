import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateUpload from "./pages/CreateUpload";
import Upload from "./pages/Upload";
import About from "./pages/About";

function App() {
  return (
      <div className="App">

        <div className = "absoluteFooter">filler</div>
        

          <Router>
              <div className="navbar">
                <div className="websiteTitle">
                    <h1 className = "mainTitle">Food Fanatics</h1>
                    <h2 className = "subtitle">Share your favorite recipes!</h2>
                </div>

                  <Link to='/'>Home</Link>
                  <Link to='/createupload'>Upload</Link>
                  <Link to='/about'>About</Link>
              </div>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/createupload' element={<CreateUpload />} />
                  <Route path='/post/:id' element={<Upload />} />
                  <Route path='/about' element={<About />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
