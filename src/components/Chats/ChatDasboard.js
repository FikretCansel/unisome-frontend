import React from "react";
import "./Chat.css";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";





function Chat(props) {
  return (
    <div>
      <main class="content">
        <div class="container p-0">
          <h1 class="h3 mb-3">Messages</h1>

          <div class="card">
            <div class="row g-0">
              <Router>
                <Sidebar user={props.user}/>
                <Route path="/chats/rooms/:roomId" exact>
                  <Messages user={props.user} groupName="matchGroups"/>
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
    user: state.userReducer
  };
}
export default connect(mapStateToProps)(Chat);
