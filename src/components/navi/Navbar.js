import React from "react";
import "./Navbar.css";
import "./Navi.js";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { connect } from "react-redux";

function Navbar(props) {
  const Logout = () => {
    console.log(props.user.getIdToken());

    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        props.actions.setUser(null);
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <div>
      <body id="body-pd">
        <header class="header" id="header">
          <div class="header_toggle">
            {" "}
            <i class="bx bx-menu" id="header-toggle"></i>{" "}
          </div>
          <h3>UNISOME</h3>

          <div className="nav-right d-flex flex-row">
            {props.user === null ? (
              <div className="d-flex flex-row">
                <Link to="/login">
                  <span className="btn btn-primary p-2">Sing in</span>
                </Link>
                <Link to="/signUp">
                  <span className="btn btn-light p-2">Sing up</span>
                </Link>
              </div>
            ) : (
              <div className="d-flex flex-row">
                <div className="header_img p-2">
                  <img src="https://i.imgur.com/hczKIze.jpg" alt="" />{" "}
                </div>
                <span className="p-2">{props.user.email}</span>
              </div>
            )}
          </div>
        </header>
      </body>
      <div class="l-navbar" id="nav-bar">
        <nav class="nav">
          <div>
            <a href="#" class="nav_logo">
              <i class="bx bx-layer nav_logo-icon"></i>
              <span class="nav_logo-name">UNISOME</span>
            </a>
            <div class="nav_list">
              <Link to="/" class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Home</span>
              </Link>
              <Link to={`/profile/${props?.user?.uid}`} class="nav_link">
                <i class="bx bx-user nav_icon"></i>
                <span class="nav_name">Profile</span>
              </Link>
              <Link to="/chats" class="nav_link">
                <i class="bx bx-message-square-detail nav_icon"></i>
                <span class="nav_name">My Groups</span>
              </Link>
              <Link class="nav_link">
                <i class="bx bx-bookmark nav_icon"></i>
                <span class="nav_name">Bookmark</span>
              </Link>
              <Link class="nav_link">
                <i class="bx bx-folder nav_icon"></i>
                <span class="nav_name">Files</span>
              </Link>
              <Link class="nav_link">
                <i class="bx bx-bar-chart-alt-2 nav_icon"></i>
                <span class="nav_name">Stats</span>
              </Link>
            </div>
          </div>
          {props.user !== null ? (
            <Link to="/" class="nav_link" onClick={Logout}>
              <i class="bx bx-log-out nav_icon"></i>
              <span class="nav_name">SignOut</span>
            </Link>
          ) : null}
        </nav>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer,
    cartLength: state.cartReducer.length,
  };
}
export default connect(mapStateToProps)(Navbar);
