import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateUpload from "./pages/CreateUpload";
import Upload from "./pages/Upload";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="navbar">
                    <Link to='/'>Home</Link>
                    <Link to='/createupload'>Upload</Link>
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/createupload' element={<CreateUpload />} />
                    <Route path='/post/:id' element={<Upload />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
