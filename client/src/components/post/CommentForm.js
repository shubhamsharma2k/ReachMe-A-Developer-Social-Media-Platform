import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <div className="">
        <h3 className="fw-bold">Leave a Comment</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <div className="form-floating">
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Comment the post"
            value={text}
            className="form-control"
            style={{ width: "100%", resize: "none" }}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <input type="submit" className="btn btn-dark my-4" value="Submit" />
        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
