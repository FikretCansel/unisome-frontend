import React from "react";
import "./Navbar.css";
import "./Navi.js";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { connect } from "react-redux";

function Navbar(props) {
  const Logout = () => {

    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <div>
      <body id="body-pd">
        <header className="header" id="header">
          <div className="header_toggle">
            <i className="bx bx-menu" id="header-toggle"></i>
          </div>
          <h3>UNISOMEA</h3>

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
                  <img src={props.user.photoURL} alt="" />
                </div>
                <span className="p-2">{props.user.email}</span>
              </div>
            )}
          </div>
        </header>
      </body>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <Link to="/" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">UNISOME</span>
            </Link>
            <div className="nav_list">
              <Link to="/" className="nav_link active">
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Home</span>
              </Link>
              <Link to="agenda" className="nav_link">
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
                <span className="nav_name">Agenda</span>
              </Link>
              <Link to="/postadd" className="nav_link">
                <i className="bx bxs-add-to-queue nav_icon"></i>
                <span className="nav_name">Post Add</span>
              </Link>
              <Link to="/chats" className="nav_link">
                <i className="bx bx-message-square-detail nav_icon"></i>
                <span className="nav_name">My Groups</span>
              </Link>
              {
                props.user?
                <Link to={`/profile/${props?.user?.uid}`} className="nav_link">
                <i className="bx bx-user nav_icon"></i>
                <span className="nav_name">Profile</span>
              </Link>:null
              }
              {
                props.user?
                <Link to="/match" className="nav_link">
                <i class='bx bxs-comment-add'></i>
                <span className="nav_name">Match</span>
              </Link>:null
              }
            </div>
          </div>
          {props.user !== null ? (
            <div>
              <Link to="/settings" className="nav_link">
                <i className="bx bx-cog nav_icon"></i>
                <span className="nav_name">Settings</span>
              </Link>

              <Link to="/" className="nav_link" onClick={Logout}>
                <i className="bx bx-log-out nav_icon"></i>
                <span className="nav_name">SignOut</span>
              </Link>
            </div>
          ) : null}
        </nav>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer
  };
}
export default connect(mapStateToProps)(Navbar);
