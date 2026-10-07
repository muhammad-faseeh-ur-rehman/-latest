import { useEffect, useState } from "react";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h2>Loading posts...</h2>;
  }
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>
            Likes: {post.reactions.likes} | Dislikes: {post.reactions.dislikes}
          </p>
          <p> Views: {post.views}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default Posts;
