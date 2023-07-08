import React from "react";
import "./css/Post.css";
import { RxAvatar } from "react-icons/rx";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdRepeat } from "react-icons/io";
import { BsFillChatLeftDotsFill, BsFillShareFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

const Post = () => {
  return (
    <div className="post">
      <div className="post__info">
        <RxAvatar />
        <h4>User Name</h4>
        <small>Timestamp</small>
      </div>
      <div className="post__body">
        <p>This is test question</p>
        <button className="post__btnAnswer">Answer</button>
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <AiFillLike />
          <AiFillDislike />
        </div>
        <IoMdRepeat />
        <BsFillChatLeftDotsFill />
        <div className="post__footerLeft">
          <BsFillShareFill />
          <FiMoreHorizontal />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        1 Answer
      </p>
      <div
        style={{
          margin: "50x 0px 0px 0px",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="post-answer-container"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888",
            }}
            className="post-answered"
          >
            <RxAvatar />
            <div
              style={{
                margin: "0px 10px",
              }}
              className="post-info"
            >
              <p>Username</p>
              <span>TimeStamp</span>
            </div>
          </div>
          <div className="post-answer">This is test answer</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
