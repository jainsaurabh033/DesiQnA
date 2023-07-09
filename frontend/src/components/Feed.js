import React, { useEffect, useState } from "react";
import "./css/Feed.css";
import QuoraBox from "./QuoraBox";
import Post from "./Post";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/questions")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.reverse());
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="feed">
      <QuoraBox />
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default Feed;
