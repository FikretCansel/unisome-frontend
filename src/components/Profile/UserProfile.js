import React, { useEffect, useState } from "react";
import "./UserProfile.css";

import { Col } from "reactstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
// import { Button } from "@material-ui/core";
// import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  profileAvatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    marginTop: "120px",
  },
}));

export default function UserProfile() {
  const [profileData, setProfileData] = useState({});
  // const [areaOfInterest, setProfileData] = useState([]);
  const user = useSelector((state) => state.userReducer);
  const classes = useStyles();
  let { userId } = useParams();

  useEffect(() => {
    if (userId) {
      axios
        .get(
          "http://localhost:5000/unisomea/us-central1/app/api/profiles/" +
            userId
        )
        .then((result) => {
          setProfileData(result.data[0]);
        });
      // axios
      // .get(
      //   "http://localhost:5000/unisomea/us-central1/app/api/profiles/getAreaOfInterestsByUserId/1" + userId
      // )
      // .then((result) => {
      //   setProfileData(result.data[0]);
      // });
    }
  }, [userId]);

  return (
    <div style={{marginTop:"175px"}}>
      <div class="container">
        
        <div
          class="img"
          style={{background: "linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg);"
            ,height: "350px;",backgroundImage: "cover;"}}
        ></div>
        <div class="card social-prof">
          <div class="card-body">
            <div class="wrapper">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                alt=""
                class="user-profile"
              />
              <h3>{profileData?.userName}</h3>
              <p>Web Developer</p>
            </div>


            <div class="row ">
              <div class="col-lg-12">
                <ul class=" nav nav-tabs justify-content-center s-nav d-flex flex-row">
                  <li>
                    <a className="p-2 text-decoration-none active" href="#">
                      About Me
                    </a>
                  </li>
                  <li>
                    <a className="p-2 text-decoration-none">Posts</a>
                  </li>
                  <li>
                    <a className="p-2 text-decoration-none" href="#">Area of Interest</a>
                  </li>
                </ul>
              </div>
            </div>



          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body info-card social-about">
                <h2 class="text-blue">About</h2>
                <h4>
                  <strong>About Me</strong>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <h4 class="mb-3">
                  <strong>Personal Info</strong>
                </h4>
                <div class="row">
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fa-birthday-cake mr-2"></i>
                      <span>{profileData?.birthDay}</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fa-map-marker-alt mr-2"></i>
                      <span>{profileData?.city}</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fas fa-users mr-2"></i>
                      <span>{profileData?.gender}</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fa-briefcase mr-2"></i>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fas fa-mobile mr-2"></i>
                      <span>8392832983</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fas fa-envelope mr-2"></i>
                      <span>like @example.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card info-card">
              <div class="card-body">
                <h2 class="text-blue">Skills</h2>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>HTML5</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4>Bootstrap Framework</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>Vanilla Javascript</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4>Angular Js</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>Adobe Photoshop</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4>Adobe Illustrator</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>SASS/SCSS</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4>WORDPRESS</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card info-card">
              <div class="card-body">
                <h2 class="text-blue">Education</h2>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>
                      <strong>Pune University </strong>
                    </h4>
                    <p>May 2009 to June 2011 </p>
                  </div>
                  <div class="col-lg-6">
                    <h4>
                      <strong>Course: Gamification</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <h4>
                      <strong>St Xavier Highschool</strong>
                    </h4>
                    <p>Aug 2004 to June 2009 </p>
                  </div>
                  <div class="col-lg-6">
                    <h4>
                      <strong>Bachelor - Computer Science</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card info-card">
              <div class="card-body">
                <h2 class="text-blue">Work</h2>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>
                      <strong>Creative Arts - 2016-19</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <h4>
                      <strong>Web Media - 2014-16</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <h4>
                      <strong>Global Infosoft - 2012-14</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <h4>
                      <strong>Freelancer - 2011-12</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
