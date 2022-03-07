import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "firebase";
import axios from "axios";

export default function Messages({ user }) {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    setSeed(Math.floor(Math.random() * 5000));
    if (roomId) {
      db.collection("matchGroups")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });
      console.log(roomId);

      db.collection("matchGroups")
        .doc(roomId)
        .collection("chats")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => {
              return doc.data();
            })
          );
        });
    }
  }, [roomId]);



  const getAreaOfInterestRooms=(roomId)=>{
    db.collection("basicGroups")
    .doc(roomId)
    .onSnapshot((snapshot) => {
      setRoomName(snapshot.data().name);
    });

    db.collection("basicGroups")
    .doc(roomId)
    .collection("chats")
    .onSnapshot((snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => {
          return doc.data();
        })
      );
    });


  }

  const sendMessage = (e) => {
    e.preventDefault();

    console.log(roomId);

    if (input !== "" && input !== undefined && input !== null) {
      axios
        .post(
          "http://localhost:5000/unisomea/us-central1/app/api/matchGroups/sendMessageAGroup/" +
            roomId,
          {
            message: input,
            userId: user.uid,
            userName: user.displayName,
            sentDate: firebase.firestore.FieldValue.serverTimestamp(),
          }
        )
        .then((result) => setInput(""))
        .catch((result) => {
          console.log("Messaj gönderilemedi" + result);
        });
    }
    setInput("");
  };

  return (
    <div class="col-12 col-lg-7 col-xl-9">
      <div class="py-2 px-4 border-bottom d-none d-lg-block">
        <div class="d-flex align-items-center py-1">
          <div class="position-relative">
            <Avatar
              src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
          </div>
          <div class="flex-grow-1 pl-3">
            <strong>{roomName}</strong>
            <div class="text-muted small">
              <em>
                Last seen
                {new Date(
                  messages[messages.length - 1]?.timestamp?.toDate()
                ).toUTCString()}
              </em>
            </div>
          </div>
        </div>
      </div>
      <div style={{ overflow: "auto", overflowX: "hidden", height: "500px" }}>
        {/* {width: "300px;", overflow: "auto;", overflow-x: "hidden;" ,height: "100px;"} */}
        {messages.map((message) => (
          <div class="position-relative">
            <div class="p-4">
              <div
                className={`pb-4 chat-message-${
                  message.userName === user?.displayName ? "right" : "left"
                }`}
              >
                <div>
                  <div class="text-muted small text-nowrap mt-2">
                    {new Date(message.sentDate?.toDate()).toUTCString()}
                  </div>
                </div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                  <div class="font-weight-bold mb-1">{message.userName}</div>
                  {message.message}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div class="flex-grow-0 py-3 px-4 border-top">
        <div class="input-group">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            class="form-control"
            placeholder="Type your message"
          />
          <button class="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
