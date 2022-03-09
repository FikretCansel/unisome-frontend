import React from "react";
import screamPng from "./scream.png";
import { Link } from "react-router-dom";

export default function NotHaveAProfile() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="row justify-content-center">
            <div className="col-md-10">
             <h3>Opsss.Profile Not Found</h3>
            </div>
          </div>
          <img src={screamPng} className="col-md-8" alt="Error" />
          <div className="row justify-content-center mt-5">
            <div className="col-md-8">
              <Link to="/settings/personal-infos" className="btn btn-primary btn-lg">
                AAA hemen Oluştur
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
