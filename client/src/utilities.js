import axios from "axios";

export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

export async function handleLike(postId, listOfPosts, setListOfPosts, likedPosts, setLikedPosts) {
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
};