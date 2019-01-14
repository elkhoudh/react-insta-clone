import React from "react";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import Comments from "./Comments";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PostContainer = props => {
  const { Insta } = props;
  return (
    <>
      {Insta.map((post, i) => (
        <div key={i} className="post-container">
          <PostHeader
            thumbnailUrl={post.thumbnailUrl}
            username={post.username}
          />
          <PostImage imageUrl={post.imageUrl} />
          <Comments comments={post.comments} />
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  Insta: state.Insta.data
});

PostContainer.propTypes = {
  Insta: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      ),
      username: PropTypes.string,
      timestamp: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      imageUrl: PropTypes.string
    })
  )
};

export default connect(mapStateToProps)(PostContainer);
