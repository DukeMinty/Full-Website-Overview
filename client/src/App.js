import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Posts";

function App() {

  return <div className="App">
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>CreatePost</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post}/>
        </Switch>
      </Router>
  </div>

}

export default App;
