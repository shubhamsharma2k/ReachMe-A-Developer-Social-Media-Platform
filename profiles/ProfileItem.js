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
    <div className="card mb-3 ">
      <div className="row g-0">
        <div className="col-md-3">
          <img src={avatar} alt="" className="round-img" />
        </div>
        <div className="col-md-9">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h2 className="card-title fw-bold text-uppercase">{name}</h2>
            <p className="card-text">
              {status} {company && <span> at {company}</span>}
            </p>
            <p className="my-1 card-text lead my-2">
              LOCATION: {location && <span>{location}</span>}
            </p>
            <div>
              <ul className="d-flex justidy content-between list-unstyled">
                {skills.slice(0, 4).map((skill, index) => (
                  <li key={index} className="text-primary mx-3">
                    <i className="fas fa-check" /> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <Link to={`/profile/${_id}`} className="btn btn-dark">
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
