import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import axios from 'axios';
import "./Home.css"
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/unisomea/us-central1/app/api/posts/getAll")
      .then(res => {
        setPosts(res.data);
      })
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
            <Post key={post.id} post={post}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
