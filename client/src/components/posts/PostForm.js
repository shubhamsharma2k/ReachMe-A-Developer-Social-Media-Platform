import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <div>
        <h3 className="fw-bold text-secondary">Say Something...</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <div className="form-floating">
          <textarea
            name="text"
            cols="20"
            rows="10"
            placeholder="Create a post"
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

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
