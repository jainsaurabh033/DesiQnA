import { IoMdAdd } from "react-icons/io";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/history-etched-old-paper-scroll-feather-quill-compass-30890377.jpg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBpm6a5I_AY5oSx-DxIi_Ej6vr1yssJNyxwyhHkuhMg&s"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://th.bing.com/th/id/OIP.hbOLD_7GHofSYexpO7gdpwHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
          src="https://th.bing.com/th/id/OIP.Qc97e9HGTmTzH3pEXFJjAAHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrFjF9_nHx_NTeOxa4TMqCpd10Eo2HCdvDA&usqp=CAU"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBjOtQobnYCi9eVYWTbp7vQxwJwOALJpfSQ&usqp=CAU"
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
        <IoMdAdd className="add" />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
