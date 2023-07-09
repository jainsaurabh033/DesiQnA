import React from "react";
import "./css/Feedbox.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

const FeedBox = () => {
  const user = useSelector(selectUser);
  return (
    <div className="box">
      <div className="info">
        <img className="avatar" src={user?.photo} alt="" />
      </div>
      <div className="question">
        <h3>What is your question or link?</h3>
      </div>
    </div>
  );
};

export default FeedBox;
