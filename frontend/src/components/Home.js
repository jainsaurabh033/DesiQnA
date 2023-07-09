import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="quora">
      <Header />
      <div className="contents">
        <div className="content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;
