import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <Link to="/edit-profile" className="btn btn-light mx-2">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light mx-2">
        <i className="fab fa-black-tie text-primary" /> Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light mx-2">
        <i className="fas fa-graduation-cap text-primary" /> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
