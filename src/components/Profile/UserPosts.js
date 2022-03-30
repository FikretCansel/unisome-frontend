import React, { useEffect,useState } from "react";
import Post from "../Post/Post";
import { db } from "../../firebase";

export default function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(userId){
      db.collection("posts").where("user.userId","==",userId)
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
    }
  }, [userId]);
  return (
    <div className="">
      <div className="card">
        <div className="card-body info-card social-about">
          <h2 className="text-blue">User's Posts</h2>

          <div className="row">
            <div className="posts">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
