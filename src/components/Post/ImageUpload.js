import React, { useState } from "react";
import {storage } from "../../firebase";
import "./ImageUpload.css";
import { connect } from "react-redux";

function ImageUpload(props) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const maxImageSize=3;
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  // const [eventImage, seteventImage] = useState(true);

  // const clickedImage = () => {
  //   seteventImage(true);
  // };
  // const clickedVideo = () => {
  //   seteventImage(false);
  // };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (image !== null) {
      if (image.type === "image/jpeg" || image.type === "image/png") {
        if(image.size<=maxImageSize*1000225){
          setSubmitButtonDisabled(true);

        const uploadTash = storage.ref(`images/${image.name}`).put(image);
        uploadTash.on(
          "state_changed",
          (snaphot) => {
            //progress function...
            const progress = Math.round(
              (snaphot.bytesTransferred / snaphot.totalBytes) * 100
            );
            console.log(progress)
            props.setResullt(progress+"Loading...")
            setProgress(progress);
          },
          (error) => {
            //Error function
            console.log(error);
            alert(error.message);
          },
          () => {
            //complete function ...
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                props.sendToPost(url, props.text);
              });
            setProgress(100);
            setImage(null);
          }
        );
        }else{
          alert(`Image size must be less than ${maxImageSize} mb`);
        }
      }else{
        alert("Image must be of png or jpg type");
      }
    } else {
      props.endToPost("", props.text);
    }
  };


  return (
    <div className="imageupload">
      <progress className="imageupload__progress" value={progress} max="100" />
      <div className="checkboxs">
        {/* <Checkbox
          value={eventImage}
          onClick={clickedImage}
          checked={eventImage}
        >
          Image
        </Checkbox>
        <label>Image</label> */}
        {/* <Checkbox onClick={clickedVideo} checked={!eventImage}>
          Video
        </Checkbox>
        <label>Video</label> */}
      </div>
      <input className="image-input" type="file" onChange={handleChange} />
      <button className="btn btn-style-1 btn-primary w-75 p-3" disabled={submitButtonDisabled} onClick={handleUpload}>Upload</button>
      {props.result}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer,
  };
}
export default connect(mapStateToProps)(ImageUpload);
