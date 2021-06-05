import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <div className="card bg-white mb-3">
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
          <p className="my-1 lead">{text}</p>
          <p className="mb-3">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>
        </div>
        {!auth.loading && user === auth.user._id && (
          <div>
            <button
              onClick={() => deleteComment(postId, _id)}
              type="button"
              className="btn btn-danger mx-3"
              style={{}}
            >
              Delete Comment
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
