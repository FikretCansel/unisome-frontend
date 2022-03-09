import React from "react";

export default function AreasOfInterest({ areasOfInterest }) {

  return (
    <div class="col-lg-6">
      <div class="card info-card">
        <div class="card-body">
          <h2 class="text-blue">Interest Of Areas</h2>

          <div class="row">
            {areasOfInterest.map((interest) => (
              <div class="col-lg-6" key={interest?.id}>
                <h4>{interest?.aiName}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
