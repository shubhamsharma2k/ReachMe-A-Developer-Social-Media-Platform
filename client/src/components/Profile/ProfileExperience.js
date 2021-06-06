import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, bio, from, to, location, description },
}) => {
  return (
    <div className="d-flex flex-column mx-4 my-2 border-bottom">
      <div>
        <h4 className="my-2">Company: {company}</h4>
        <p className="lead my-3">
          <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
          {!to ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
        </p>
        <p className="lead">
          <strong>Position:</strong>
          {title}
        </p>
        <p className="lead my-2">
          <strong>Description:</strong>
          {description}
        </p>
      </div>
    </div>
  );
};

ProfileExperience.propTypes = {
  expirence: PropTypes.array.isRequired,
};

export default ProfileExperience;
