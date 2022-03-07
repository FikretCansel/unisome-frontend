import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Checkout from "./components/Checkout.js";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import { auth } from "./firebase";
import Payment from "./components/Payment.js";
import ProductUpdater from "./components/ProductUpdater";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "./redux/actions/userActions";
import PostAdd from "./components/Post/PostAdd";
import UserProfile from "./components/Profile/UserProfile";
import Navbar from "./components/navi/Navbar";
import ChatDasboard from "./components/Chats/ChatDasboard";
import UpdateDashBoard from "./components/Update/UpdateDashBoard";
import NotHaveAProfile from "./components/Profile/NotHaveAProfile";

function App(props) {
  function setUser(authUser) {
    props.actions.setUser(authUser);
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        //the user is logged out
        props.actions.setUser(null);
      }
    });
  }, [props.actions]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/postAdd">
          <div  style={{marginTop:"75px"}}>
            <PostAdd />
          </div>
        </Route>
        <Route path="/settings" component={UpdateDashBoard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/update" component={ProductUpdater}></Route>
        <Route path="/profile/not-found">
          <div style={{ marginTop: "175px" }}>
            <NotHaveAProfile />
          </div>
        </Route>
        <Route path="/profile/:userId">
          <UserProfile />
        </Route>

        <Route path="/chats">
          <div style={{ marginTop: "75px" }}>
            <ChatDasboard />
          </div>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setUser: bindActionCreators(userActions.setUser, dispatch),
    },
  };
}
export default connect(null, mapDispatchToProps)(App);
