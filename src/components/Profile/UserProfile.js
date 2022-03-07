import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { useHistory } from "react-router-dom";
import { Col } from "reactstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import PersonelInfos from "./PersonelInfos";
import AreasOfInterest from "./AreasOfInterest";

const useStyles = makeStyles((theme) => ({
  profileAvatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    marginTop: "120px",
  },
}));

export default function UserProfile() {
  const [profileData, setProfileData] = useState({});
  const [areasOfInterest, setAreasOfInterest] = useState([]);

  // const [areaOfInterest, setProfileData] = useState([]);
  const user = useSelector((state) => state.userReducer);
  const classes = useStyles();
  let { userId } = useParams();
  const history = useHistory();

  useEffect(() => {
    


    if (userId) {
      axios
        .get(
          "http://localhost:5000/unisomea/us-central1/app/api/profiles/" +
            userId
        )
        .then((result) => {
          if (result.data[0]) {
            setProfileData(result.data[0]);

            axios
              .get(
                "http://localhost:5000/unisomea/us-central1/app/api/profiles/getAreasOfInterestsByDocId/" +
                  result.data[0].id
              )
              .then((result) => {
              
                  setAreasOfInterest(result.data);
                
              });
          }else{
            history.push('/profile/not-found');
          }
        });
    }
  }, [userId]);

  return (
    <div style={{ marginTop: "175px" }}>
      <div class="container">
        <div
          class="img"
          style={{
            background:
              "linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg);",
            height: "350px;",
            backgroundImage: "cover;",
          }}
        ></div>
        <div class="card social-prof">
          <div class="card-body">
            <div class="wrapper">
              <img
                src={profileData?.photoURL}
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
                    <a className="p-2 text-decoration-none" href="#">
                      Area of Interest
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <PersonelInfos profileData={profileData} />

          <AreasOfInterest areasOfInterest={areasOfInterest} />
        </div>
      </div>
    </div>
  );
}
