import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import axios from "axios";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("matchGroups")
        .doc(id)
        .collection("chats")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please Enter Name for Chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

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
              <p>{messages[0]?.message}</p>
            </div>
          </div>
        </div>
      </Link>
  );
}

export default SidebarChat;
