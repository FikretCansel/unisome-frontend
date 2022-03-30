import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Agenda.css";
import { db } from "../../firebase";
function Agenda() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collectionGroup("posts")
    .orderBy("sentDate", "desc")
    .onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="home">
      <div className="home__container">

        <div className="posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Agenda;
