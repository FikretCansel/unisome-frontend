import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import "./Post.css"

function Product(props) {
  useEffect(() => {}, [props.post]);

  return (
    // <div className="post-container">
    //     <p>{props.post.text}</p>
    //   <img src={props.post.imageUrl} alt="Resim bulunamadı" />
    //   <button>Add to Basket</button>
    // </div>
    <div class="container posts-content col-lg-6" style={{marginTop:"80px"}}>
          <div class="card mb-4">
            <div class="card-body">
              <div class="media mb-3">
                <img
                  src={props.post.imageUrl}
                  class="d-block ui-w-40 rounded-circle"
                  alt=""
                />
                <div class="media-body ml-3">
                {props.post.userId}
                  <div class="text-muted small">3 days ago</div>
                </div>
              </div>

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
              <a
                href="javascript:void(0)"
                class="d-inline-block text-muted ml-3"
              >
                <small class="align-middle">Repost</small>
              </a>
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
