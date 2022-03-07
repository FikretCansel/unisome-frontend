import axios from "axios";
import React, { useState } from "react";
import { db } from "../../firebase";

export default function PersonalInfos({ user }) {
  const [seed, setSeed] = useState(1);
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  const [birthDay, setBirthDay] = useState(new Date());
  const [gender, setGender] = useState("Erkek");

  const updateProfile = (e) => {
    e.preventDefault();

    let profileData = {
      userId: user.uid,
      userName,
      city,
      birthDay,
      gender,
      photoURL:`https://avatars.dicebear.com/api/human/${seed}.svg`
    };

    db.collection("profiles")
      .where("userId", "==", user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            db.collection("profiles")
              .doc(doc.id)
              .update(profileData)
              .then(() => {
                user
                  .updateProfile({
                    displayName: userName,
                    photoURL: `https://avatars.dicebear.com/api/human/${seed}.svg`,
                  })
                  .then(() => {
                    // Update successful
                    // ...
                  })
                  .catch((error) => {
                    // An error occurred
                    // ...
                  });
              })
              .catch((err) => console.log(err));
          }

          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <div class="col-lg-8 pb-5">
      <form class="row" onSubmit={(e) => updateProfile(e)}>
        <div class="col-md-6">
          <div class="form-group">
            <label for="account-fn">UserName</label>
            <input
              className="form-control"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label for="account-ln">Gender</label>
            <input
              placeholder="alien if you want"
              class="form-control"
              type="text"
              id="account-ln"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label for="account-email">City</label>
            <input
              class="form-control"
              type="text"
              id="account-email"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label for="account-phone">BirthDay</label>
            <input
              className="form-control"
              type="date"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              required=""
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="account-phone">Your Lucky Number(Profile Photo)</label>
            <input
              class="form-control"
              type="number"
              defaultValue={seed}
              onChange={(e) => {
                setSeed(e.target.value);
              }}
              required=""
            />
          </div>
        </div>
        <div class="col-md-6">
          <img src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        </div>

        <div class="col-12">
          <hr class="mt-2 mb-3" />
          <div class="d-flex flex-wrap justify-content-between align-items-center">
            <div class="custom-control custom-checkbox d-block"></div>
            <button
              class="btn btn-style-1 btn-primary"
              type="submit"
              data-toast=""
              data-toast-position="topRight"
              data-toast-type="success"
              data-toast-icon="fe-icon-check-circle"
              data-toast-title="Success!"
              data-toast-message="Your profile updated successfuly."
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
