import React from "react";
import "boxicons/css/boxicons.min.css";

export default function PersonelInfos({ profileData }) {
  return (
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body info-card social-about">
          <h2 class="text-blue">About</h2>
          {/* <h4>
                  <strong>About Me</strong>
                </h4> */}
          {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
          <h4 class="mb-3">
            <strong>Personal Info</strong>
          </h4>
          <div class="row">
            <div class="col-6">
              {profileData?.birthDay !== undefined ? (
                <div class="social-info">
                  <i class="bx bx-cake"></i>
                  <span>{profileData?.birthDay}</span>
                </div>
              ) : null}
            </div>
            <div class="col-6">
              {profileData?.city !== undefined ? (
                <div class="social-info">
                  <i class="bx bxs-city"></i>
                  <span>{profileData?.city}</span>
                </div>
              ) : null}
            </div>
          </div>
          <div class="row">
            {profileData?.gender !== undefined ? (
              <div class="col-6">
                <div class="social-info">
                  <i class="bx bx-female-sign"></i>
                  <span>{profileData?.gender}</span>
                </div>
              </div>
            ) : null}
            {/* <div class="col-6">
                    <div class="social-info">
                    <i class='bx bxl-gmail' ></i>
                      <span>like @example.com</span>
                    </div>
                  </div> */}
          </div>
          {/* <div class="row">
                  <div class="col-6">
                    <div class="social-info">
                    <i class='bx bx-phone'></i>
                      <span>8392832983</span>
                    </div>
                  </div>
                </div> */}
        </div>
      </div>
    </div>
  );
}
