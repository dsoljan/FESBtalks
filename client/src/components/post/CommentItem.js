import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Link, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <Box
    border={0.7}
    borderRadius='borderRadius'
    borderColor='grey'
    style={{ marginBottom: '1em' }}
  >
    <Grid
      container
      maxWidth='sm'
      spacing={3}
      justify='center'
      style={{
        maxWidth: '700px',
        padding: '1.5em',
      }}
    >
      <Grid item xs={12} sm={4} align='center'>
        <Link href={`/profile/${user}`}>
          <img
            src={avatar}
            alt=''
            style={{
              borderRadius: '10em',
              maxWidth: '3.5em',
              position: 'relative',
            }}
          />
          <Typography variant='subtitle1'>{name}</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={8} align='center'>
        <Typography variant='body1'>{text}</Typography>
        <Typography variant='body2' color='textSecondary'>
          Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
        </Typography>
        {!auth.loading && user === auth.user._id && (
          <Button color='secondary' onClick={(e) => deleteComment(postId, _id)}>
            Delete
          </Button>
        )}
      </Grid>
    </Grid>
  </Box>
);

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deleteComment })(CommentItem);
