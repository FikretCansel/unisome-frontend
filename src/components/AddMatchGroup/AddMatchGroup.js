import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function AddMatchGroup(props) {
  // const [areasOfInterest, setAreasOfInterest] = useState([]);
  // const [selectedAreaId, setSelectedAreaId] = useState("");
  let history = useHistory();
  useEffect(() => {
    // db.collectionGroup("basicGroups")
    //   .get()
    //   .then((result) => {
    //     setAreasOfInterest(
    //       result.docs.map((doc) => {
    //         return { id: doc.id, ...doc.data() };
    //       })
    //     );
    //     // setBasicRooms(result.data);
    //   })
    //   .catch(() => {});
  }, []);

  const submitHandleMatch = (e) => {
    e.preventDefault();

    getRandomUser();
  };

  const getRandomUser = async () => {
    await db
      .collectionGroup("profiles")
      .get()
      .then((result) => {
        var random = Math.floor(Math.random() * result.docs.length);

        let matchUser = result.docs[random].data();
        let me = props.profile;
        
        while (matchUser.userId !== matchUser.userId) {
          random = Math.floor(Math.random() * result.docs.length);
        }
        const res = db
          .collection("matchGroups")
          .add({
            name: me.userName + " And " + matchUser.userName,
            users: [matchUser.userId,me.userId],
          })
          .then(() => {
            history.push("/chats");
            db.collection("profiles").doc(me.id).update({lastMatch:new Date()}).then(res=>{

              // if(me.lastMatch<new Date().setDate())
              console.log("LastMatch Success")
            }).catch(()=>console.log("LastMatch Update"))


            alert("Match Success :)");
          })
          .catch("Error Match");
      })
      .catch(() => {
        console.log("Hata profile");
      });
  };

  return (
    <div
      className="container d-flex justify-content-center"
      style={{ marginTop: "100px"}}
    >
      <div className="col-10" >
        <form className="col-12" onSubmit={(e) => submitHandleMatch(e)}>
          {/* <label>Select a AreaOfInterest :</label>
          <select
            defaultValue={areasOfInterest[0]?.id}
            onChange={(e) => {
              setSelectedAreaId(e.target.value);
            }}
            class="form-select form-select-lg mb-6"
            aria-label=".form-select-lg example"
          >
            {areasOfInterest.map((area) => (
              <option value={area.id} className="dropdown-item">
                {area.name}
              </option>
            ))}
          </select> */}
          {/* <label className="mt-5">Group Size:</label>
          <select
            class="form-select form-select-lg"
            aria-label=".form-select-sm example"
            placeholder="Member"
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select> */}

          <button style={{width:"100%",height:"600px",fontSize:35,background:"#4723D9",color:"white" } } className="btn mt-5 rounded-circle">Match</button>
        </form>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    profile:state.profileReducer
  };
}
export default connect(mapStateToProps)(AddMatchGroup);
