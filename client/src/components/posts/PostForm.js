import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { TextField, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  field: {
    margin: '0.75em 0',
  },
  heading: {
    marginTop: '1em',
  },
}));

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const classes = useStyles();

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' className={classes.heading}>
        Say Something
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <TextField
          id='outlined-text'
          label='Create a post'
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

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
