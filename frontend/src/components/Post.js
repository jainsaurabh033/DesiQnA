import React, { useState } from "react";
import "./css/Post.css";
import { RxAvatar } from "react-icons/rx";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdRepeat } from "react-icons/io";
import { BsFillChatLeftDotsFill, BsFillShareFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ReactQuill from "react-quill";
import ReactTimeAgo from "react-time-ago";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ReactHtmlParser from "html-react-parser";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

const Post = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");

  const close = <AiFillCloseCircle />;
  const handleQuill = (value) => {
    setAnswer(value);
  };

  const handleSubmit = async () => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        answer: answer,
        questionId: post?._id,
      };
      await axios
        .post("http://localhost:5000/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert("Answer added successfully");
          setIsModalOpen(false);
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="post">
      <div className="post__info">
        <RxAvatar />
        <h4>User Name</h4>
        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="post__body">
        <p>{post?.questionName}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="post__btnAnswer"
        >
          Answer
        </button>
        <Modal
          open={isModalOpen}
          closeIcon={close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modal__question">
            <h1>{post?.questionName}</h1>
            <p>
              asked by <span className="name">Username</span>{" "}
              <span className="name">
                {new Date(post?.createdAt).toLocaleString()}
              </span>
            </p>
          </div>
          <div className="modal__answer">
            <ReactQuill
              value={answer}
              onChange={handleQuill}
              placeholder="Enter your answer"
            />
          </div>
          <div className="modal__button">
            <button className="cancel" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button onClick={handleSubmit} type="submit" className="add">
              Add Answer
            </button>
          </div>
        </Modal>
      </div>
      {post.questionUrl && <img src={post?.questionUrl} alt="url" />}
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
        {post?.allAnswers.length} Answer(s)
      </p>
      <div
        style={{
          margin: "50x 0px 0px 0px",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        {post?.allAnswers?.map((a, i) => (
          <>
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
                  <span>
                    <LastSeen date={a?.createdAt} />
                  </span>
                </div>
              </div>
              <div className="post-answer">{ReactHtmlParser(a?.answer)}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Post;
