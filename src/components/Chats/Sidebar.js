import React, { useState, useEffect } from "react";
import "./Chat.css";
import { db } from "../../firebase";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  const [matchRooms, setMatchRooms] = useState([]);
  const [basicRooms, setBasicRooms] = useState([]);


  useEffect(() => {
   

      db.collectionGroup("matchGroups").get()
      .then((result) => {
        

        setMatchRooms(result.docs.map((doc) => {
          return {id:doc.id,...doc.data()};
        }))
        // setBasicRooms(result.data);
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
        <SidebarChat key={room.id} id={room.id} name={room.name} routeUrl={`/chats/rooms/${room.id}`}/>
      ))}
      Basic Rooms
      {basicRooms.map((room) => (
        <SidebarChat key={room.id} id={room.id} name={room.name} routeUrl={`/chats/rooms/basicGroups/${room.id}`} />
      ))}

    </div>
  );
}

export default Sidebar;
