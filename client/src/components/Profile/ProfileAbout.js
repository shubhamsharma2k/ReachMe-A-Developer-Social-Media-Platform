import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div class="bg-light my-4">
      {bio && (
        <div className="d-flex flex-column justify-content-center align-items-center pt-4">
          <h2 class="text-info fw-bold mb-3 text-uppercase">{name}'s Bio:</h2>
          <p className="lead ps-3 display-6">{bio}</p>
        </div>
      )}

      <hr className="solid my-2" style={{ margin: "0 60px" }}></hr>

      <div class="d-flex flex-column justify-content-center align-items-center pb-3">
        <h1 class="text-info my-2 fw-bold">Skill Set:</h1>
        <div className="d-flex my-2">
          {skills.map((skill, index) => (
            <div>
              <i className="fas fa-check mx-3"></i>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
