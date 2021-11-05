import React from "react";

export default function Task(props) {
  const daysNo = props.daysNo;
  return (
    <div className="container">
      <div className="card my-3 bg-dark border-light">
        <h4 className="card-header card-title border-light">
          Special title treatment
        </h4>
        <div className="card-body">
          <button type="button" className="btn btn-light">
            {daysNo}
          </button>
        </div>
      </div>
    </div>
  );
}
