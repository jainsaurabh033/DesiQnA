import React from "react";
import { RxAvatar } from "react-icons/rx";
import "./css/QuoraBox.css";

const QuoraBox = () => {
  return (
    <div className="box">
      <div className="info">
        <RxAvatar />
      </div>
      <div className="question">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  );
};

export default QuoraBox;
