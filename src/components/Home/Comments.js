import React from "react";
import { PropTypes } from "prop-types";

const Comments = props => {
  return (
    <div className="comments">
      <div className="icons">
        <i className="fas fa-heart" />
        <i className="fas fa-comment" />
        <i className="fas fa-share" />
      </div>
      {props.comments.map((comment, i) => (
        <div key={i} className="comments-section">
          <h1>{comment.username}</h1>
          <br />
          <p>{comment.text}</p>
        </div>
      ))}

      <div className="comment-input">
        <input name="comment" placeholder="Comment..." />
      </div>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};
export default Comments;
