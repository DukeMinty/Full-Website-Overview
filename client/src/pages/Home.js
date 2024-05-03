import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { formatDate, handleLike } from "../utilities";

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState(new Set());
    let navigate = useNavigate();

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    const handleLikeClick = async (postId) => {
        await handleLike(postId, listOfPosts, setListOfPosts, likedPosts, setLikedPosts);
    };

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            const uploadData = response.data;
            setListOfPosts(uploadData);
        });
    }, []);

    return (
        <div className="container">
            {listOfPosts.map((post, index) => (
                <div className="post" key={index}>
                    <div className="title">{post.title}</div>
                    <div className="body" onClick={() => handlePostClick(post.id)}>
                        Click to check out!
                    </div>
                    <div className="footer">
                        <div className="user-info">
                            <img src="/User_icon.png" alt="User Icon" className="user-icon" />
                            <span className="username">{post.username}</span>
                        </div>
                        <div className="createdAt">
                            {formatDate(post.createdAt)}
                        </div>
                        <div className="likeCounter">
                            <button className="likeButton" onClick={() => handleLikeClick(post.id)}>
                                {likedPosts.has(post.id) ? (
                                    <img src="/likeCountFull.png" alt="Full Like" className="likeIcon" />
                                ) : (
                                    <img src="/likeCountEmpty.png" alt="Empty Like" className="likeIcon" />
                                )}
                            </button>
                            {post.likeCounter}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;