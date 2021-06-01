import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import img2 from "../../img/img2.jpg";
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="landing">
      <img className="image_img" src={img2} alt="imgg" />
      <div className="image_overlay">
        <div className="image_title">
          <h1 className="large fw-bold">
            A Social Media Platform for Developers.
          </h1>
        </div>
        <div className="buttons">
          <Link to="/register" className="btn btn-primary mx-2">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-light mx-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
