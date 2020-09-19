import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import {
  Card,
  Typography,
  Container,
  Link,
  Grid,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '2em',
    padding: '2em 1em',
    maxWidth: '700px',
  },
  icons: {
    marginTop: '2em',
  },
});

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} maxWidth='sm'>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Link href={`/profile/${user}`}>
            <img
              src={avatar}
              alt=''
              style={{
                borderRadius: '10em',
                maxWidth: '7em',
                position: 'relative',
                marginLeft: '2em',
              }}
            />
            <Typography variant='h5'>{name}</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant='body1'>{text}</Typography>
          <Typography variant='body2' color='textSecondary'>
            Posted on{' '}
            <Moment format='DD/MM/YYYY'>{date}</Moment>
          </Typography>

          {showActions && (
            <Container>
              <IconButton
                className={classes.icons}
                aria-label='like'
                onClick={(e) => addLike(_id)}
              >
                {' '}
                <ThumbUpAltIcon />
                {' '}
                {likes.length > 0 && (
                  <Typography variant='body1'>{likes.length}</Typography>
                )}
              </IconButton>
              <IconButton
                className={classes.icons}
                aria-label='dislike'
                onClick={(e) => removeLike(_id)}
              >
                <ThumbDownAltIcon />
              </IconButton>{' '}
              <IconButton
                href={`/posts/${_id}`}
                className={classes.icons}
                aria-label='comment'
              >
                <MessageIcon />
                {comments.length > 0 && (
                  <Typography variant='body1'>
                    {' '}
                    {comments.length}
                  </Typography>
                )}
              </IconButton>
              {!auth.loading && user === auth.user._id && (
                <IconButton
                  className={classes.icons}
                  aria-label='delete'
                  onClick={(e) => deletePost(_id)}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Container>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
