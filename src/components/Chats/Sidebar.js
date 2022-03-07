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

function Sidebar() {
  const [matchRooms, setMatchRooms] = useState([]);
  const [basicRooms, setBasicRooms] = useState([]);


  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/unisomea/us-central1/app/api/matchGroups/getAll"
      )
      .then((result) => {
        console.log(result.data);
        setMatchRooms(result.data);
      })
      .catch(() => {});


      db.collectionGroup("basicGroups").get()
      .then((result) => {
        

        setBasicRooms(result.docs.map((doc) => {
          return {id:doc.id,...doc.data()};
        }))
        // setBasicRooms(result.data);
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
      Matches Rooms
      {matchRooms.map((room) => (
        <SidebarChat key={room.id} id={room.id} name={room.name} />
      ))}
      Basic Rooms
      {basicRooms.map((room) => (
        <SidebarChat key={room.id} id={room.id} name={room.name} />
      ))}

    </div>
  );
}

export default Sidebar;
