import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
// import ProfileGithub from "./ProfileGithub";
const Profile = ({
  getProfileById,
  match,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return (
    <div>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <div>
          <Link to="/profiles" className="btn btn-light">
            Back to Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark mx-3">
                Edit Profile
              </Link>
            )}

          <div className="mb-4">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />

            <div
              className="row"
              style={{ padding: "0px", margin: "0px", height: "auto" }}
            >
              {profile.experience.length > 0 ? (
                <div className="col-sm-6 bg-light border border-dark">
                  <h4 className="display-6 my-2 mx-4">EXPERIENCE</h4>
                  {profile.experience.map((exp) => (
                    <ProfileExperience experience={exp} key={exp._id} />
                  ))}
                </div>
              ) : (
                <div className="col-sm-6 bg-light border border-dark">
                  <div className="d-flex flex-column align-items-center">
                    <h4 className="display-5 my-2 mx-4">EXPERIENCE</h4>
                    <h2>No Experience Credential</h2>
                  </div>
                </div>
              )}

              {profile.education.length > 0 ? (
                <div className="col-sm-6 bg-light border border-dark">
                  <h4 className="display-6 my-2 mx-4">Education</h4>
                  {profile.education.map((edu) => (
                    <ProfileEducation education={edu} key={edu._id} />
                  ))}
                </div>
              ) : (
                <div className="col-sm-6 bg-light border border-dark">
                  <div className="d-flex flex-column align-items-center">
                    <h4 className="display-5 my-2 mx-4">Education</h4>
                    <h2>No Education Credential</h2>
                  </div>
                </div>
              )}
            </div>

            {/* {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

Profile.propTypes = {};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
