import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdFeaturedPlayList, MdAssignmentTurnedIn } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdPeopleAlt, MdExpandMore } from "react-icons/md";
import "./css/Header.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const close = <GrClose />;

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("http://localhost:5000/api/questions", body, config)
        .then((res) => {
          alert(res.data.message);
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };

  return (
    <>
      <div className="header">
        {/* <h1 className="Title">Desi QnA</h1> */}
        <img
          src="https://th.bing.com/th/id/OIP.eXvGGCmYdvMAzY7EASI61gHaFD?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7https://th.bing.com/th/id/OIP.eXvGGCmYdvMAzY7EASI61gHaFD?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="logo"
        />
        <div className="header-content">
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
            <input className="search" type="text" placeholder="Search" />
          </div>
          <div className="header-Rem">
            <span onClick={handleLogout}>
              <img className="avatar" src={user?.photo} alt="" />
            </span>
          </div>
          <button className="button" onClick={() => setIsModalOpen(true)}>
            Add Question
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              borderRadius: "1500px",
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__title">
              <h5> Add Question</h5>
              <h5> Share Link</h5>
            </div>
            <div className="modal__info">
              {/* <RxAvatar className="avatar" /> */}
              <img className="avatar" src={user?.photo} alt="" />
              <div className="modal__scope">
                <MdPeopleAlt />
                <p>Public</p>
                <MdExpandMore />
              </div>
            </div>
            <div className="modal__Field">
              <textarea
                rows="10"
                cols="50"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                placeholder="Start your question with what, How, why, etc"
              />
              <div
                styles={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: include a link that gives on text"
                />
              </div>
              {inputUrl !== "" && (
                <img
                  src={inputUrl}
                  alt="display image"
                  style={{
                    height: "30vh",
                    width: "60vh",
                    objectFit: "content",
                  }}
                />
              )}
            </div>
            <div className="modal__buttons">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Header;
