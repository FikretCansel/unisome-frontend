import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import InputControl from "./InputControl";
import styles from "../../css/Signup.module.css";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase";

function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seed, setSeed] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = async () => {
    if (!userName || !email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;

        db.collection("profiles")
          .add({
            userId: user.uid,
            userName: userName,
            photoURL: `https://avatars.dicebear.com/api/human/${seed}.svg`,
          })
          .then((docRef) => {

            console.log("profil oluşturuldu")
            user.updateProfile({
              displayName: userName,
              photoURL: `https://avatars.dicebear.com/api/human/${seed}.svg`,
            });

            user.sendEmailVerification();
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });

        history.push("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="User Name"
          placeholder="Enter your user name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputControl
          type="password"
          label="Password"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputControl
          label="Your Lucky Number"
          placeholder="Lucky number will determine your profile picture"
          onChange={(e) => {
            setSeed(e.target.value);
          }}
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
