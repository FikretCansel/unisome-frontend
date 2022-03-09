import React from "react";
import { Link } from "react-router-dom";
import {
  useParams,
} from "react-router-dom";

function SettingsSideBar({user}) {
  let { param } = useParams();

  const personelInfos="personal-infos";
  const changePassword="change-password";
  const areaOfInterest="set-area-of-interest";

  return (
    <div className="col-lg-4 pb-5">
      <div className="author-card pb-3">
        <div className="author-card-cover">
          <Link
            class="btn btn-style-1 btn-white btn-sm"
            data-toggle="tooltip"
            title=""
            data-original-title="You currently have 290 Reward points to spend"
          >
          </Link>
        </div>
        <div className="author-card-profile">
          <div className="author-card-avatar">
            <img
              src={user?.photoURL}
              alt="Daniel Adams"
            />
          </div>
          <div className="author-card-details">
            <h5 className="author-card-name text-lg">{user?.displayName}</h5>
            <span className="author-card-position">Joined February 06, 2017</span>
          </div>
        </div>
      </div>
      <div className="wizard">
        <nav class="list-group list-group-flush">
          <Link to={`/settings/${personelInfos}`} className={`list-group-item ${param===personelInfos||param===undefined?"active":""}`}>
            <i class="fe-icon-user text-muted"></i>Personal Infos
          </Link>
          <Link to="/settings/set-area-of-interest" className={`list-group-item ${param===areaOfInterest?"active":""}`}>
            <i class="fe-icon-user text-muted"></i>Areas Of Interest
          </Link>
          <Link to={`/settings/${changePassword}`} className={`list-group-item ${param===changePassword?"active":""}`}>
            <i class="fe-icon-user text-muted"></i>Change Password
          </Link>
          
        </nav>
      </div>
    </div>
  );
}

export default SettingsSideBar;
