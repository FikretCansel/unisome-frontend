import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "firebase";
import axios from "axios";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Chat() {
  return (
    <div>
      <main class="content">
        <div class="container p-0">
          <h1 class="h3 mb-3">Messages</h1>

          <div class="card">
            <div class="row g-0">
              <Router>
                <Sidebar />
                <Route path="/chats/rooms/:roomId">
                  <Messages />
                </Route>
              </Router>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Chat;
