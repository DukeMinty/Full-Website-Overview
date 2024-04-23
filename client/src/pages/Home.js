import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";

function Home(){

    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3001/posts").then((response) => {
        setListOfPosts(response.data.reverse())
      });
    }, []);

    return(
        <div className="container">
            {listOfPosts.map((value, key) => {
                return (
                <div className ="post">
                    <div className="title">{value.title}</div>
                    <div className="body">{value.postText}</div>
                    <div className="footer">
              <img src="/User_icon.png" alt="User Icon" className="user-icon" />
              {value.username}
            </div>
                </div>
            );
        })}
        </div>
    );
}

export default Home;