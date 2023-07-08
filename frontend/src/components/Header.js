import React from "react";
import { FaHome } from "react-icons/fa";
import { MdFeaturedPlayList, MdAssignmentTurnedIn } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-logo">
          <img
            src="data:image/png;base64,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"
            alt="Logo"
          />
        </div>
        <div className="header-icons">
          <div className="header-icon">
            <FaHome />
          </div>
          <div className="header-icon">
            <MdFeaturedPlayList />
          </div>
          <div className="header-icon">
            <MdAssignmentTurnedIn />
          </div>
          <div className="header-icon">
            <BsFillPeopleFill />
          </div>
          <div className="header-icon">
            <IoMdNotifications />
          </div>
        </div>

        <div className="header-input">
          <BiSearchAlt2 />
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-Rem">
          <RxAvatar />
        </div>
        <button>Add question</button>
      </div>
    </div>
  );
};

export default Header;
