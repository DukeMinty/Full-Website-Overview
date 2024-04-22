import './App.css';
import axios from "axios";
import {useEffect, useState} from 'react';


function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3050/uploads").then((response)=> {
      setListOfPosts(response.data);
    })
  },[])
  return (
    <div className="App">
      {listOfPosts.map((value, key)=> {
        return( 
        <div className="upload">
          <div className="title">{value.recipeTitle}</div>
          <div className="body">{value.recipeDesc}</div>
          <div className="footer">{value.userName}</div>
        </div>
    );
    })}
      
    </div>
  );
}

export default App;
//maybe include post date with something like <div className="date">{value.date}</div>
