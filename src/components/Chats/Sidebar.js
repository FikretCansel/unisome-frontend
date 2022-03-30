import React, { useState, useEffect } from "react";
import "./Chat.css";
import { db } from "../../firebase";
import SidebarChat from "./SidebarChat";

function Sidebar({ profile }) {
  const [matchRooms, setMatchRooms] = useState([]);
  const [basicRooms, setBasicRooms] = useState([]);
  const [generalRooms, setGeneralRooms] = useState([]);
  const [areasOfInterest, setAreasOfIntest] = useState([]);

  useEffect(() => {
    db.collectionGroup("generalGroups").onSnapshot((snapshot) => {
      console.log(snapshot.docs);
      setGeneralRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });

    if (profile) {
      db.collectionGroup("matchGroups")
        .where("users", "array-contains", profile.userId)
        .onSnapshot((snapshot) => {
          console.log(snapshot.docs);
          setMatchRooms(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        });

      db.collectionGroup("basicGroups")
        .get()
        .then((result) => {
          setBasicRooms(
            result.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
          // setBasicRooms(result.data);
        })
        .catch(() => {});
    }

    getAreasOfInterest();
  }, [profile]);

  const getAreasOfInterest = () => {
    if (profile) {
      db.collection("profiles")
        .doc(profile?.id)
        .collection("AreasOfInterest")
        .onSnapshot((snapshot) => {
          setAreasOfIntest(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        });
    }
  };

  const getIsSelectedRole = (roomId) => {
    let isTrue = false;
    areasOfInterest.forEach((a) => {
      if (a.aiName === roomId) {
        isTrue = true;
        return true;
      }
    });
    if (isTrue) {
      return true;
    }
    return false;
  };

  return (
    <div className="col-12 col-lg-5 col-xl-3 border-right">
      <div className="px-4 d-none d-md-block">
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <input
              type="text"
              className="form-control my-3"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      {profile ? (
        <div>
          <p className="pl-4">General Groups</p>

          {generalRooms.map((room) => (
            <SidebarChat
              key={room.id}
              id={room.id}
              name={room.name}
              routeUrl={`/chats/rooms/generalGroups/${room.id}`}
            />
          ))}

          <p className="pl-4">Matches Rooms</p>
          {matchRooms.map((room) => (
            <SidebarChat
              key={room.id}
              id={room.id}
              name={room.name}
              routeUrl={`/chats/rooms/${room.id}`}
            />
          ))}
          <p className="pl-4">Basic Rooms</p>
          {basicRooms.map((room) =>
            getIsSelectedRole(room.name) === true ? (
              <SidebarChat
                key={room.id}
                id={room.id}
                name={room.name}
                routeUrl={`/chats/rooms/basicGroups/${room.id}`}
              />
            ) : null
          )}
        </div>
      ) : (
        <p className="pl-4">Sign in for mores</p>
      )}
    </div>
  );
}

export default Sidebar;
