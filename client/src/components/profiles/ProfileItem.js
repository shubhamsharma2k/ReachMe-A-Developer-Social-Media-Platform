import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="card mb-3 bg-light">
      <div className="row">
        <div className="col-md-3">
          <img src={avatar} alt="no-img" className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-9">
          <div className="d-flex flex-column align-items-center">
            <h2 className="fw-bold text-uppercase mt-3 card-title">{name}</h2>
            <p className="mb-3">
              {status} {company && <span> at {company}</span>}
            </p>
            <p className="mb-3">
              LOCATION: {location && <span>{location}</span>}
            </p>

            <ul
              className="d-flex list-group list-group-horizontal-md"
              style={{ padding: "0px", marginRight: "0px" }}
            >
              {skills.slice(0, 4).map((skill, index) => (
                <li
                  key={index}
                  className="text-success list-unstyled list-group-item"
                >
                  <i className="fas fa-check"></i> {skill}
                </li>
              ))}
            </ul>

            <Link
              to={`/profile/${_id}`}
              className="btn btn-dark my-3"
              style={{ width: "50%" }}
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
