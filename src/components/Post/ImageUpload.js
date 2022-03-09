import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { db, storage } from "../../firebase";
import "./ImageUpload.css";
import { connect } from "react-redux";
import firebase from "firebase";

function ImageUpload(props) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
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
    const uploadTash = storage.ref(`images/${image.name}`).put(image);
    uploadTash.on(
      "state_changed",
      (snaphot) => {
        //progress function...
        const progress = Math.round(
          (snaphot.bytesTransferred / snaphot.totalBytes) * 100
        );
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
            sendToPost(url, props.text);
          });
        setProgress(0);
        setImage(null);
      }
    );
  };

  const sendToPost = async (imageUrl, textdata) => {
    const uid = await props.user.uid;

    db.collection("posts").add({
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
    }).then((result)=>{}).catch(err=>console.log(err));
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
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer,
  };
}
export default connect(mapStateToProps)(ImageUpload);
