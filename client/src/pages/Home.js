import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
<<<<<<< HEAD
import { useNavigate} from 'react-router-dom';
=======
import { useHistory} from 'react-router-dom'; 
>>>>>>> 803b3a8b6f44a569afddcddd52eb71fba42ba7be

function Home(){

    const [listOfPosts, setListOfPosts] = useState([]);
<<<<<<< HEAD
    let navigate = useNavigate()

=======
  let history = useHistory()
>>>>>>> 803b3a8b6f44a569afddcddd52eb71fba42ba7be
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
<<<<<<< HEAD
                    <div className="post" key={key} onClick={() => navigate(`/post/${value.id}`)}>
=======
                <div className ="post" onClick={() => {history.push('/post/${value.id}')}}>
>>>>>>> 803b3a8b6f44a569afddcddd52eb71fba42ba7be
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