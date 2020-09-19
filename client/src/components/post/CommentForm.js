import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import { TextField, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  field: {
    maxWidht: '700px',
  },
  heading: {
    marginTop: '1em',
  },
}));

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  const classes = useStyles();

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' className={classes.heading}>
        Leave a Comment
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <TextField
          id='outlined-text'
          label='Add a comment'
          name='text'
          value={text}
          margin='normal'
          fullWidth
          multiline
          rows={4}
          onChange={(e) => setText(e.target.value)}
          variant='outlined'
          className={classes.field}
          required
        ></TextField>
        <Button
          type='submit'
          fullWidth
          margin='auto'
          variant='contained'
          color='secondary'
          className={classes.submit}
        >
          Submit
        </Button>{' '}
      </form>
    </Container>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
