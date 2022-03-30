import React from "react";
import "./Chat.css";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";


function Chat(props) {
  
  return (
    <div>
      <main className="content">
        <div className="container p-0">
          <h1 className="h3 mb-3">Messages</h1>

          <div className="card">
            <div className="row g-0">
              <Router>
                <Sidebar user={props.user} profile={props.profile}/>
                <Route path="/chats/rooms/:roomId" exact>
                  <Messages user={props.user} groupName="matchGroups"/>
                </Route>
                <Route path="/chats/rooms/generalGroups/:roomId">
                  <Messages user={props.user} groupName="generalGroups"/>
                </Route>
                
                <Route path="/chats/rooms/basicGroups/:roomId">
                  <Messages user={props.user} groupName="basicGroups"/>
                </Route>

                
              </Router>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer,
    profile:state.profileReducer
  };
}
export default connect(mapStateToProps)(Chat);
