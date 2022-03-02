import React, { useState, useEffect } from "react";
import "./Chat.css";
// import {Avatar, IconButton} from "@material-ui/core";
// import DonutLargeIcon from "@material-ui/icons/DonutLarge";
// import ChatIcon from "@material-ui/icons/Chat";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import {SearchOutlined} from "@material-ui/icons";
// import SidebarChat from "./SidebarChat";
// import {db} from '../../firebase';
import { Link } from "react-router-dom";
import axios from "axios";
import { db } from "../../firebase";
import SidebarChat from "./SidebarChat";

function Sidebar({ id, name, addNewChat }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/unisomea/us-central1/app/api/matchGroups/getAll"
      )
      .then((result) => {
        console.log(result.data);
        setRooms(result.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div class="col-12 col-lg-5 col-xl-3 border-right">
      <div class="px-4 d-none d-md-block">
        <div class="d-flex align-items-center">
          <div class="flex-grow-1">
            <input
              type="text"
              class="form-control my-3"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      {rooms.map((room) => (
        <SidebarChat key={room.id} id={room.id} name={room.name} />
      ))}
    </div>
  );
}

export default Sidebar;
