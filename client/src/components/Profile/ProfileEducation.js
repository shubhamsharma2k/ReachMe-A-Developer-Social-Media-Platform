import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <div className="d-flex flex-column mx-4 my-2 border-bottom">
      <div>
        <h4 className="my-2">School: {school}</h4>
        <p className="lead my-3">
          <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
          {!to ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
        </p>
        <p className="lead">
          <strong>Degree:</strong>
          {degree}
        </p>
        <p className="lead">
          <strong>Field Of Study:</strong>
          {fieldofstudy}
        </p>
        <p className="lead my-2">
          <strong>Description:</strong>
          {description}
        </p>
      </div>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
