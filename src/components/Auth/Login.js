import React, { useState } from "react";
import { Link, } from "react-router-dom";
import InputControl from "./InputControl"; //../InputControl/InputControl
import { auth } from "../../firebase";
import styles from "../../css/Login.module.css";
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

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
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter email address"
        />
        <InputControl
        type="password"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
