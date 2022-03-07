import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import axios from "axios";

function SidebarChat({ id, name }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    if (id) {
      
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);


  return (
      <Link
        to={`/chats/rooms/${id}`}
        key={id}
        class="list-group-item list-group-item-action border-0"
      >
        <div class="badge bg-success float-right">5</div>
        <div class="d-flex align-items-start">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div class="flex-grow-1 ml-3">
            <p>{name}</p>
            <div class="small">
              <span class="fas fa-circle chat-online"></span>{" "}
            
            </div>
          </div>
        </div>
      </Link>
  );
}

export default SidebarChat;
