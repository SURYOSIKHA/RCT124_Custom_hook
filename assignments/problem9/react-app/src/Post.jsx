import React, { useState, useCallback, useMemo } from "react";

const Post = React.memo(({ post }) => {
  const [isVerified, setIsVerified] = useState(post.verifyPost);

  const randomColor = useMemo(() => {
    return `hsl(${Math.random() * 360}, 100%, 75%)`;
  }, []);

  const toggleVerify = useCallback(() => {
    setIsVerified((prevVerified) => !prevVerified);
  }, []);

  return (
    <div style={{ backgroundColor: randomColor, padding: "10px", margin: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={toggleVerify}>
        {isVerified ? "Verified" : "Verify"}
      </button>
    </div>
  );
});

export default Post;
