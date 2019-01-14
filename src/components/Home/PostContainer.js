import React from "react";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import Comments from "./Comments";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLike } from "../../actions";

const PostContainer = props => {
  const { Insta, onLike } = props;

  const onLikeClick = username => {
    onLike(username);
  };
  return (
    <>
      {Insta.data.map(post => (
        <div key={post.username} className="post-container">
          <PostHeader
            thumbnailUrl={post.thumbnailUrl}
            username={post.username}
          />
          <PostImage imageUrl={post.imageUrl} />
          <Comments
            comments={post.comments}
            onLikeClick={onLikeClick}
            likes={post.likes}
            username={post.username}
            Insta={Insta}
          />
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  Insta: state.Insta
});

const mapActionsToProps = {
  onLike: addLike
};

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

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PostContainer);
