import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import "./Post.css"
import { Link } from "react-router-dom";
import { db } from "../../firebase";

function Post(props) {

  const getDate=()=>{
    return new Date(props.post?.sentDate?.seconds*1000).toDateString();
  }


  const [isLiked,setIsLiked]=useState(null);
  const [likeId,setLikeId]=useState(null);
  const [likeCount,setLikeCount]=useState(null);

  useEffect(() => {
    if (props.user) {
      db.collection("posts").doc(props.post.id).collection("likes").where("userId","==",props.user.uid)
        .onSnapshot((snapshot) => {
          if(snapshot.docs.length>0){
            setLikeId(snapshot.docs[0].id);
            setIsLiked(true);
          }else{
            setIsLiked(false)
          }
        });
    }
    getLikeCount();


  }, [props.post.id,props.user]);


  const getLikeCount=()=>{
    db.collection("posts").doc(props.post.id).collection("likes")
        .onSnapshot((snapshot) => {
          setLikeCount(snapshot.docs.length);
          return;
        });
  }

  const handleLike=()=>{

    if(isLiked===false&&props.user){
      db.collection("posts").doc(props.post.id).collection("likes")
      .add({
        userId:props.user.uid,
        userName:props.user.displayName
      })
      .then((result) => {
        setIsLiked(true)
      })
      .catch((err) =>{
        setIsLiked(null)
      });
    }
  }

  const handleRemoveLike=()=>{


    if(isLiked&&isLiked!==undefined&&props.user){
      db.collection("posts").doc(props.post.id).collection("likes").doc(likeId).delete()
      .then((result) => {
        setIsLiked(false)
      })
      .catch((err) =>{
        setIsLiked(true)
      });
    }
  }

  return (
    // <div className="post-container">
    //     <p>{props.post.text}</p>
    //   <img src={props.post.imageUrl} alt="Resim bulunamadı" />
    //   <button>Add to Basket</button>
    // </div>
    <div className="container col-lg-6" style={{marginTop:"80px"}}>
          <div className="card mb-4">
            <div className="card-body">
              <Link to={`/profile/${props.post.user?.userId}`} className="media mb-3">
                <img
                  src={props.post?.user?.photoURL}
                  className="d-block ui-w-40 rounded-circle"
                  alt=""
                />
                <div className="media-body ml-3">
                {props.post.user?.userName}
                  <div className="text-muted small">{getDate()}</div>
                </div>
              </Link>

              <p>
              {props.post.text}
              </p>
              <img
                  className="col-lg-12"
                  src={props.post.imageUrl}
                  alt=""
                />
            </div>
            <div className="card-footer">
              <Link className="d-inline-block text-muted">
                <strong>{likeCount}</strong> <small>Likes</small>
              </Link>
              {
                isLiked===true?<i className='bx bxs-like' style={{fontSize:25, margin:5}} onClick={handleRemoveLike} ></i>:<i className='bx bx-like' style={{fontSize:25, margin:5}} onClick={handleLike}></i>
              }
              <Link
                className="d-inline-block text-muted ml-3"
              >
                <strong>12</strong>
                <small> Comments</small>
              </Link>
              <Link
                to={`posts/category/${props.post.areaOfInterest.name}`}
                className="d-inline-block text-muted ml-3"
              >
                <small className="align-middle">{props.post.areaOfInterest.name}</small>
              </Link>
            </div>
          </div>
        </div>
  );
}
function mapStateToProps(state) {
  return {
    user: state.userReducer
  };
}
export default connect(mapStateToProps)(Post);