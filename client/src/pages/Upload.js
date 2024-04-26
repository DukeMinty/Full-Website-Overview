import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import axios from "axios"; 

function Upload() {
    const { id } = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`)
            .then((response) => {
                setPostObject(response.data);
            })
            .catch((error) => {
                console.error("Error fetching post:", error);
            });
    }, [id]);

    return (
        <div className="postPage">
            <div className="postText">{postObject.postText}</div>
        </div>
    );
}

export default Upload;