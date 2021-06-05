import React from "react";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center bg-success mt-4"
      style={{ height: "100vh" }}
    >
      <img
        class="rounded-circle"
        src={avatar}
        alt="no-img"
        style={{ height: "auto", width: "250px" }}
      />

      <div className="d-flex flex-column align-items-center">
        <h1 class="display-2 text-light">{name}</h1>
        <p class="lead text-light">
          {status}
          {company && <span> at {company}</span>}
        </p>
        <p className="text-light">{location && <span>{location}</span>}</p>
      </div>

      <div class="my-1 d-flex">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 link-dark"
          >
            <i class="fas fa-globe fa-2x"></i>
          </a>
        )}

        {social && social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 link-info"
          >
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        )}

        {social && social.facebook && (
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 link-primary"
          >
            <i class="fab fa-facebook fa-2x"></i>
          </a>
        )}

        {social && social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i class="fab fa-linkedin fa-2x link-secondary"></i>
          </a>
        )}

        {social && social.youtube && (
          <a
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 link-danger"
          >
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        )}

        {social && social.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
