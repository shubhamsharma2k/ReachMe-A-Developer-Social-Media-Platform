import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav me-auto">
          <li className="nav-item me-4">
            <Link to="/profiles" className="nav-link">
              Developers
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link to="/dashboard" className="nav-link">
              <i className="fas fa-user" /> <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a onClick={logout} href="#!" className="nav-link">
              <i className="fas fa-sign-out-alt" /> <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  const guestLinks = (
    <div className="me-5">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/profiles" className="nav-link">
            Developers
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mx-5 fw-bold">
          ReachMe
        </Link>
        <div>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
