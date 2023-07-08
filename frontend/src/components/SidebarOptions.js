import { IoMdAdd } from "react-icons/io";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1012501180/photo/old-globe-on-bookshelf-background.jpg?s=612x612&w=0&k=20&c=HOAI1Yti25ekVOK4u1d8jkav2OzkHk5TrN6nTFCUdLQ="
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://blog.robotiq.com/hubfs/Photo%20by%20rawpixel.com%20from%20Pexels.jpg"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://www.udc.edu/social-udc/wp-content/uploads/sites/24/2018/03/Importance-of-Psychology_UDC.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://t4.ftcdn.net/jpg/01/13/80/37/360_F_113803790_GA5ymemnlMH5x1K5lpPlssfAQdMwHvjN.jpg"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg?w=2000"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?w=2000"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://prod-upp-image-read.ft.com/4bddfb6e-fa84-11e6-9516-2d969e0d3b65"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://st3.depositphotos.com/1064045/15061/i/600/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpghttps://st3.depositphotos.com/1064045/15061/i/600/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3836.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <IoMdAdd />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
