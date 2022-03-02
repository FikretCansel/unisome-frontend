import React, { useEffect, useState } from "react";
import "../css/UserProfile.css";
import { Col } from "reactstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
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
    if(userId){
    axios
      .get(
        "http://localhost:5000/unisomea/us-central1/app/api/profiles/" + userId
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
    <div className="profileContainer">
      <Col xs="12">
        <div className="profile">
          <div className="profileWall">
            <Avatar
              alt="Remy Sharp"
              src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSEMzT3A936ggzPgcxDyYvSNHscpAQusuehxlzbwQf4yiRv2vMbVgYg-5cxopsk"
              className={classes.profileAvatar}
            />
          </div>
          <div className="basicInfos">
            <h1>{profileData.userName}</h1>
            <h6>{profileData.city}</h6>
            <h6>{profileData.gender}</h6>
            {user?.uid === userId ? (
              <div>
                <Button>Profili Düzenle</Button>
                <Button>Fotograf Düzenle</Button>
              </div>
            ) : null}
          </div>
        </div>
      </Col>
    </div>
  );
}
