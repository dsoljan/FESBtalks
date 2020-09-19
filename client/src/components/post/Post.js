import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import { Container, Button } from '@material-ui/core';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Container
      component='main'
      style={{
        background: 'black',
        height: 'fit-content',
        paddingTop: '2em',
      }}
    >
      <Button variant='outlined' href='/posts'>
        Go Back
      </Button>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <Container style={{ paddingTop: '2em' }} maxWidth='sm'>
          {post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
