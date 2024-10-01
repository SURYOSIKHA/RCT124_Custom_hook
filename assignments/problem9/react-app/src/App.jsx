import React, { useState, useEffect, useCallback, useMemo } from "react";
import Post from "./Post";

const App = () => {
  const [timer, setTimer] = useState(0); 
  const [title, setTitle] = useState(""); 
  const [body, setBody] = useState(""); 
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval); 
  }, []);

  const addPost = useCallback(() => {
    if (title.trim() && body.trim()) {
      const newPost = {
        id: posts.length + 1,
        title,
        body,
        verifyPost: false,
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setTitle(""); 
      setBody("");  
    }
  }, [title, body, posts]);

  const memoizedPosts = useMemo(() => posts, [posts]);

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={addPost}>Add Post</button>

      <div>
        {memoizedPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
