import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import PersonelInfos from "./PersonelInfos";
import AreasOfInterest from "./AreasOfInterest";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

export default function UserProfile() {
  const [profileData, setProfileData] = useState({});
  const [areasOfInterest, setAreasOfInterest] = useState([]);

  let { userId } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (userId) {
      db.collection("profiles")
        .where("userId", "==", userId)
        .get()
        .then((result) => {
          if (result.docs[0]) {
            let docId = result.docs[0].id;

            setProfileData({ id: result.docs[0].id, ...result.docs[0].data() });

            db.collection("profiles")
              .doc(docId)
              .collection("AreasOfInterest")
              .get()
              .then((result) => {

                setAreasOfInterest(
                  result.docs.map((doc) => {
                    return {id:doc.id,...doc.data()}
                  })
                );
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            history.push("/profile/not-found");
          }
        })
        .catch(() => {});
    }
  }, [userId]);

  return (
    <div style={{ marginTop: "175px" }}>
      <div class="container">
        <div
          className="img"
          style={{
            background:
              "linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg);",
            height: "350px;",
            backgroundImage: "cover;",
          }}
        ></div>
        <div className="card social-prof">
          <div className="card-body">
            <div className="wrapper">
              <img src={profileData?.photoURL} alt="" class="user-profile" />
              <h3>{profileData?.userName}</h3>
              {/* <p>Web Developer</p> */}
              <p></p>
            </div>

            <div className="row ">
              <div className="col-lg-12">
                <ul className=" nav nav-tabs justify-content-center s-nav d-flex flex-row">
                  <li>
                    <Link className="p-2 text-decoration-none active">
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link className="p-2 text-decoration-none">Posts</Link>
                  </li>
                  <li>
                    <Link className="p-2 text-decoration-none">
                      Area of Interest
                    </Link>
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
