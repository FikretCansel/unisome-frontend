import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ImageUpload from "./ImageUpload";
// import 'bootstrap-select/dist/css/bootstrap-select.min.css';
// import 'bootstrap-select/dist/js/bootstrap-select.min.js';

function PostAdd(props) {
  const [text, setText] = useState("");

  const postAdd = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <div
          class="container posts-content col-lg-6"
          style={{ marginTop: "80px" }}
        >
          <div class="card mb-4">
            <div class="card-body">
              <div class="media mb-3">
                <img
                  src={props.user?.photoURL}
                  class="d-block ui-w-40 rounded-circle"
                  alt=""
                />
                <div class="media-body ml-3">
                {props.user?.displayName}
                  <div class="text-muted small">{new Date().toDateString()}</div>
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
              <img
                // style={{maxHeight:"400px",}}
                className="col-lg-12"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
                alt=""
              />
              <select class="selectpicker" data-live-search="true">
                <option data-tokens="ketchup mustard">
                  Futbol
                </option>
                <option data-tokens="mustard">Türkçe</option>
                <option data-tokens="frosting">
                  Matematik
                </option>
              </select>

              <ImageUpload text={text} />
            </div>

            <div class="card-footer">
              <a href="javascript:void(0)" class="d-inline-block text-muted">
                <strong>0</strong> <small>Likes</small>
              </a>
              <a
                href="javascript:void(0)"
                class="d-inline-block text-muted ml-3"
              >
                <strong>0</strong>
                <small> Comments</small>
              </a>
              <a
                href="javascript:void(0)"
                class="d-inline-block text-muted ml-3"
              >
                <small class="align-middle">Repost</small>
              </a>
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
