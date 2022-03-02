import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from "react-redux";

function PostAdd(props) {

    const postAdd=async(e)=>{
        e.preventDefault();
        console.log("Eklendi");
        const idToken=await props.user.getIdToken();
        axios.post('http://localhost:5000/unisomea/us-central1/app/api/posts/add', {
            idToken:idToken,
            areaOfınterestName: "Futbol",
            sentdate: {
                _seconds: 1644958800,
                _nanoseconds: 0
            },
            userId: "2",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
            text: "Ronaldo 2",
            areaOfınterestId: "1"
        })
    }

  return (
    <div>
        <form onSubmit={(e)=>{postAdd(e)}}>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

function mapStateToProps(state) {
    return {
      user: state.userReducer,
    };
  }
  export default connect(mapStateToProps)(PostAdd);
