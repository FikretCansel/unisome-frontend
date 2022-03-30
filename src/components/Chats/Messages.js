import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "firebase";

export default function Messages({ user, groupName }) {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [dateIsOpen, setDateIsOpen] = useState(false);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    if (roomId) {
      db.collection(groupName)
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data()?.name);
        });

      db.collection(groupName)
        .doc(roomId)
        .collection("chats")
        .orderBy("sentDate")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => {
              return {id:doc.id,...doc.data()};
            })
          );
        });
    }
  }, [roomId,groupName]);

  const sendMessage = (e) => {
    e.preventDefault();


    if (input !== "" && input !== undefined && input !== null) {
      db.collection(groupName)
        .doc(roomId)
        .collection("chats")
        .add({
          message: input,
          userId: user.uid,
          userName: user.displayName,
          sentDate: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((result) => setInput(""))
        .catch((result) => {
          console.log("Messaj gönderilemedi" + result);
        });
    }
    setInput("");
  };

  const handleDataIsOpen = () => {
    setDateIsOpen(!dateIsOpen);
  };

  return (
    <div className="col-12 col-lg-7 col-xl-9">
      <div className="py-2 px-4 border-bottom d-none d-lg-block">
        <div className="d-flex align-items-center py-1">
          <div className="position-relative">
            <Avatar
              src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
          </div>
          <div className="flex-grow-1 pl-3">
            <strong>{roomName}</strong>
            <div className="text-muted small">
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
          <div key={message.id} className="position-relative" onClick={() => handleDataIsOpen()}>
            <div className="p-4">
              <div
                className={`pb-4 chat-message-${
                  message.userName === user?.displayName ? "right" : "left"
                }`}
              >
                {!dateIsOpen ? (
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">{message.userName}</div>
                    {message.message}
                  </div>
                ) : (
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">{message.message}</div>
                    <div className="text-muted small text-nowrap mt-2">
                      
                      {new Date(message.sentDate?.toDate()).toUTCString()}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-grow-0 py-3 px-4 border-top">
        <div className="input-group">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Type your message"
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
