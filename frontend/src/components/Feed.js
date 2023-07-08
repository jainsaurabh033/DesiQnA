import React from "react";
import "./css/Feed.css";
import QuoraBox from "./QuoraBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <QuoraBox />
      <Post />
    </div>
  );
};

export default Feed;
