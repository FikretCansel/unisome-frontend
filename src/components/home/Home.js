import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Home.css"
import { db } from "../../firebase";
function Home({user}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    db.collection("posts")
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
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} user={user}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
