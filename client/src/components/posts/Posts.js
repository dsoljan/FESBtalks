import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import { Typography, Container, Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Container
      style={{
        background: 'black',
        height: 'fit-content',
        paddingBottom: '3em',
      }}
    >
      <CssBaseline />
      <Typography variant='h2' style={{ padding: '10px' }}>
        {' '}
        Posts
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        style={{ paddingLeft: '3em' }}
      >
        Welcome to the community
      </Typography>
      <Box align='center'>
        <PostForm />
        <div>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </Box>
    </Container>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
