import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import { auth } from "./firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "./redux/actions/userActions";
import PostAdd from "./components/Post/PostAdd";
import UserProfile from "./components/Profile/UserProfile";
import Navbar from "./components/navi/Navbar";
import ChatDasboard from "./components/Chats/ChatDasboard";
import UpdateDashBoard from "./components/Update/UpdateDashBoard";
import NotHaveAProfile from "./components/Profile/NotHaveAProfile";
import Agenda from "./components/agenda/Agenda";

function App(props) {

  const [isAuth, setIsAuth] = useState(false);

  function setUser(authUser) {
    props.actions.setUser(authUser);
  }


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setIsAuth(true);
      } else {
        //the user is logged out
        props.actions.setUser(null);
        setIsAuth(false);
      }
    });
  }, [props.actions]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/postAdd">
          <div style={{ marginTop: "75px" }}>
            {isAuth ? <PostAdd /> : <p>Lütfen giriş yapınız</p>}
          </div>
        </Route>
        <Route path="/agenda" component={Agenda} />
        <Route path="/settings" component={UpdateDashBoard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
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
