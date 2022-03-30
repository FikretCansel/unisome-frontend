import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import "boxicons/css/boxicons.min.css";
import { Button } from "@material-ui/core";
// import 'bootstrap-select/dist/css/bootstrap-select.min.css';
// import 'bootstrap-select/dist/js/bootstrap-select.min.js';


import { db } from "../../firebase";
import firebase from "firebase";


function PostAdd(props) {
  const [text, setText] = useState("");
  const [imageUploadIsOpen,setImageUploadIsOpen]=useState(false);
  const [result, setResullt] = useState("");;
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  // const postAdd = async (e) => {
  //   e.preventDefault();
  // };
//importent parameters.don't delete
  const sendToPost = async (imageUrl, textdata) => {
    const uid = await props.user.uid;
    setSubmitButtonDisabled(true);

    if(text!=="" && text.length>3){
      
    db.collection("posts")
      .add({
        user: {
          userId: uid,
          userName: props.user.displayName,
          photoURL: props.user.photoURL,
        },
        imageUrl: imageUrl,
        text: textdata,
        areaOfInterest: {
          id: "1",
          name: "Türkçe",
        },
        sentDate: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((result) => {setResullt("Post Shared...")})
      .catch((err) =>{
        setSubmitButtonDisabled(true);
        setResullt("An error was encountered")});
      }else{
        setSubmitButtonDisabled(false);
        setResullt("description must be greater than 3 characters");
      }
  };

  return (
    <div>
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
                <textarea 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Description"
                />{" "}
              </p>
                <Button className="bx bx-image-add" onClick={()=>setImageUploadIsOpen(!imageUploadIsOpen)}>AddImage</Button>

              {/* <select class="selectpicker" data-live-search="true">
                <option data-tokens="ketchup mustard">
                  Futbol
                </option>
                <option data-tokens="mustard">Türkçe</option>
                <option data-tokens="frosting">
                  Matematik
                </option>
              </select> */}
              <br/>
              
              {
                imageUploadIsOpen?<ImageUpload setResullt={setResullt} result={result} text={text} sendToPost={sendToPost}/>:<div>
                 <button className="btn btn-style-1 btn-primary w-75 p-3" disabled={submitButtonDisabled} onClick={()=>sendToPost("",text)}>Upload</button><br/>{result}</div>
              }

              
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
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer,
  };
}
export default connect(mapStateToProps)(PostAdd);
