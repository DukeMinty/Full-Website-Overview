import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState(new Set());
    let navigate = useNavigate();

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    const handleLike = async (postId) => {
      try {
          if (likedPosts.has(postId)) {
              // If already liked, unlike the post
              await axios.post(`http://localhost:3001/posts/${postId}/unlike`);
              setLikedPosts((prevLikedPosts) => {
                  const newLikedPosts = new Set(prevLikedPosts);
                  newLikedPosts.delete(postId);
                  return newLikedPosts;
              });
  
              // Decrement likeCounter for the post
              const updatedPosts = listOfPosts.map((post) => {
                  if (post.id === postId) {
                      return { ...post, likeCounter: post.likeCounter - 1 };
                  }
                  return post;
              });
              setListOfPosts(updatedPosts);
          } else {
              // If not liked, like the post
              await axios.post(`http://localhost:3001/posts/${postId}/like`);
              setLikedPosts((prevLikedPosts) => new Set([...prevLikedPosts, postId]));
  
              // Increment likeCounter for the post
              const updatedPosts = listOfPosts.map((post) => {
                  if (post.id === postId) {
                      return { ...post, likeCounter: post.likeCounter + 1 };
                  }
                  return post;
              });
              setListOfPosts(updatedPosts);
          }
      } catch (error) {
          console.error('Error updating like counter:', error);
      }
  };

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            const uploadData = response.data;
            const reversedUploads = uploadData.slice().reverse();
            setListOfPosts(reversedUploads);
        });
    }, []);

    return (
		<div className="container">
		{listOfPosts.map((value, key) => (
			<div className="post" key={key}>
			<div className="title">{value.title}</div>
			<div className="body" onClick={() => handlePostClick(value.id)}>
				Click to check out!
			</div>
			<div className="footer">
				<div className="user-info">
				<img src="/User_icon.png" alt="User Icon" className="user-icon" />
				<span className="username">{value.username}</span>
				</div>
				<div className="likeCounter">
				<button className="likeButton" onClick={() => handleLike(value.id)}>
					{likedPosts.has(value.id) ? (
					<img src="/likeCountFull.png" alt="Full Like" className="likeIcon" />
					) : (
					<img src="/likeCountEmpty.png" alt="Empty Like" className="likeIcon" />
					)}
				</button>
				{value.likeCounter}
				</div>
			</div>
			</div>
		))}
		</div>


        


    );
}

export default Home;