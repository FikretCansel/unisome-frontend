import React, { useEffect } from "react";
import PersonalInfos from "./PersonalInfos";
import SettingsSideBar from "./SettingsSideBar";
import "./UpdateDashBoard.css";
import UpdatePassword from "./UpdatePassword";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import AddAreaOfInterest from "./AddAreaOfInterest";
import { connect } from "react-redux";

function UpdateDashBoard(props) {

  

  useEffect(() => {
    console.log(props.user);
  }, []);

  return (
    <div class="container" style={{ marginTop: "150px" }}>
      <div class="row">
        <Router>
        <Switch>
          <Route path="/settings/:param" children={<SettingsSideBar user={props.user}/>} />
          <Route path="/settings" children={<SettingsSideBar user={props.user}/>} />
        </Switch>
          <Route path="/settings" exact>
            <PersonalInfos user={props.user}/>
          </Route>
          <Route path="/settings/set-area-of-interest">
            <AddAreaOfInterest user={props.user} />
          </Route>
          <Route path="/settings/personal-infos">
            <PersonalInfos user={props.user} />
          </Route>
          <Route path="/settings/change-password">
            <UpdatePassword user={props.user}/>
          </Route>
        </Router>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    user: state.userReducer
  };
}
export default connect(mapStateToProps)(UpdateDashBoard);

