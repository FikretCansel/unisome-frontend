import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ImageUpload from "./ImageUpload";
// import 'bootstrap-select/dist/css/bootstrap-select.min.css';
// import 'bootstrap-select/dist/js/bootstrap-select.min.js';

function PostAdd(props) {
  const [text, setText] = useState("");

  // const postAdd = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <div>
      <form>
        <div
          className="container posts-content col-lg-6"
          style={{ marginTop: "80px" }}
        >
          <div className="card mb-4">
            <div className="card-body">
              <div className="media mb-3">
                <img
                  src={props.user?.photoURL}
                  class="d-block ui-w-40 rounded-circle"
                  alt=""
                />
                <div className="media-body ml-3">
                {props.user?.displayName}
                  <div className="text-muted small">{new Date().toDateString()}</div>
                </div>
              </div>

              <p>
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  class="form-control col-5"
                  placeholder="Description"
                />{" "}
              </p>
              {/* <select class="selectpicker" data-live-search="true">
                <option data-tokens="ketchup mustard">
                  Futbol
                </option>
                <option data-tokens="mustard">Türkçe</option>
                <option data-tokens="frosting">
                  Matematik
                </option>
              </select> */}

              <ImageUpload text={text} />
            </div>

            <div className="card-footer">
              <Link className="d-inline-block text-muted">
                <strong>0</strong> <small>Likes</small>
              </Link>
              <Link
                
                class="d-inline-block text-muted ml-3"
              >
                <strong>0</strong>
                <small> Comments</small>
              </Link>
              <Link
               
                className="d-inline-block text-muted ml-3"
              >
                <small className="align-middle">Repost</small>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer,
  };
}
export default connect(mapStateToProps)(PostAdd);
