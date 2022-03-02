import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import InputControl from "../InputControl";
import styles from "../../css/Signup.module.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    if (!userName || !email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        // await updateProfile(user, {
        //   displayName: values.name,
        // });
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
          label="Name"
          placeholder="Enter your name"
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
          label="Password"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
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
