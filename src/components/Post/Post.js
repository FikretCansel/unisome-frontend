import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import "./Post.css"
import { Link } from "react-router-dom";

function Product(props) {
  useEffect(() => {}, [props.post]);

  const getDate=()=>{
    return new Date(props.post?.sentDate?._seconds*1000).toDateString()
  }

  return (
    // <div className="post-container">
    //     <p>{props.post.text}</p>
    //   <img src={props.post.imageUrl} alt="Resim bulunamadı" />
    //   <button>Add to Basket</button>
    // </div>
    <div class="container posts-content col-lg-6" style={{marginTop:"80px"}}>
          <div class="card mb-4">
            <div class="card-body">
              <Link to={`/profile/${props.post.user?.userId}`} class="media mb-3">
                <img
                  src={props.post?.user?.photoURL}
                  class="d-block ui-w-40 rounded-circle"
                  alt=""
                />
                <div class="media-body ml-3">
                {props.post.user?.userName}
                  <div class="text-muted small">{getDate()}</div>
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
            <div class="card-footer">
              <a href="javascript:void(0)" class="d-inline-block text-muted">
                <strong>123</strong> <small>Likes</small>
              </a>
              <a
                href="javascript:void(0)"
                class="d-inline-block text-muted ml-3"
              >
                <strong>12</strong>
                <small> Comments</small>
              </a>
              <Link
                to={`posts/category/${props.post.areaOfInterest.name}`}
                class="d-inline-block text-muted ml-3"
              >
                <small class="align-middle">{props.post.areaOfInterest.name}</small>
              </Link>
            </div>
          </div>
        </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(Product);
