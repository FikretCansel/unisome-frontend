import React, { useState } from "react";
import { auth } from "../../firebase";


export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    

  const changePassword = (e) => {
    e.preventDefault()
        if(password===confirmPassword){
            console.log({password,confirmPassword})

            const user = auth.currentUser;

            console.log(user)

            user.updatePassword(password).then(res=>console.log(res.data)).catch(err=>console.log(err))

        }
        else{
            console.log("Şifreler Uyuşmuyor")
        }
  };

  return (
    <div className="col-md-8">
      <form onSubmit={(e) => changePassword(e)}>
        <div class="col-md-6">
          <div class="form-group">
            <label for="account-pass">New Password</label>
            <input
              class="form-control"
              type="password"
              id="account-pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="account-confirm-pass">Confirm Password</label>
            <input
              class="form-control"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="account-confirm-pass"
              required
            />
          </div>
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
              Update Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
