import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => (
  <div className="card bg-light mb-3">
    <div className="row">
      <div className="col-md-3">
        <div className="d-flex justify-content-center align-items-center bg-dark">
          <Link to={`/profile/${user}`} className="text-decoration-none">
            <img
              className="rounded-circle"
              src={avatar}
              alt=""
              style={{ width: "auto" }}
            />
            <div>
              <h4 className="text-light">{name}</h4>
            </div>
          </Link>
        </div>
      </div>

      <div className="col-md-9 d-flex flex-column justify-content-center mb-4">
        <div className="mb-3">
          <p className="lead mb-3 mt-4">{text}</p>
          <p className="mb-3">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>
        </div>
        {showActions && (
          <div>
            <button
              onClick={() => addLike(_id)}
              type="button"
              className="btn btn-secondary mx-2"
            >
              <i className="fas fa-thumbs-up" />{" "}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => removeLike(_id)}
              type="button"
              className="btn btn-secondary mx-2"
            >
              <i className="fas fa-thumbs-down" />
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary mx-2">
              Discussion {comments.length > 0 && <span>{comments.length}</span>}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={() => deletePost(_id)}
                type="button"
                className="btn btn-danger mx-2"
              >
                <i className="fas fa-times" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
