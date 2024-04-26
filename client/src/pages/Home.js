import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';

function Home(){

    const [listOfPosts, setListOfPosts] = useState([]);
    let navigate = useNavigate()

    useEffect(() => {
      axios.get("http://localhost:3001/posts").then((response) => {
        const uploadData = response.data;

        // Reverse the order of the data so newest uploads show up first
        const reversedUploads = uploadData.slice().reverse();
        setListOfPosts(reversedUploads);
      });
    }, []);

    return(
        <div className="container">
            {listOfPosts.map((value, key) => {
                return (
                    <div className="post" key={key} onClick={() => navigate(`/post/${value.id}`)}>
                    <div className="title">{value.title}</div>
                    <div className="body">{"Click to check out!"}</div>
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