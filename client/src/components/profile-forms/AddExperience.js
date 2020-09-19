import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import {
  TextField,
  CssBaseline,
  Container,
  Link,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '2em',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  field: {
    margin: '0.75em 0',
  },
}));

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const classes = useStyles();

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container
      component='main'
      style={{
        background: 'black',
        height: 'max-content',
        padding: '1em 0 2em 0',
      }}
    >
      <CssBaseline />
      <Typography variant='h2' style={{ padding: '15px' }}>
        {' '}
        Add An Experience
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        style={{ paddingLeft: '3em' }}
      >
        {' '}
        Add any developer/programming positions that you have had in the past
      </Typography>
      <Typography
        variant='body2'
        color='textSecondary'
        style={{ paddingLeft: '3em' }}
      >
        {' '}
        (* fields are required)
      </Typography>

      <Container className={classes.paper} maxWidth='xs'>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            addExperience(formData, history);
          }}
        >
          <TextField
            id='outlined-job'
            label='Job title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
            variant='outlined'
            margin='normal'
            fullWidth
          ></TextField>
          <TextField
            id='outlined-company'
            label='Company'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            required
            variant='outlined'
            margin='normal'
            fullWidth
          ></TextField>
          <TextField
            id='outlined-company'
            label='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
            variant='outlined'
            margin='normal'
            fullWidth
          ></TextField>
          <Typography variant='h6'>From Date</Typography>
          <TextField
            id='from-date'
            type='date'
            defaultValue=''
            name='from'
            value={from}
            onChange={(e) => onChange(e)}
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
            margin='normal'
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                name='current'
                checked={current}
                value={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />
            }
            label='Current job'
          />{' '}
          <Typography variant='h6'>From Date</Typography>
          <TextField
            id='to-date'
            type='date'
            name='to'
            label=''
            value={to}
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
          <TextField
            id='outlined-description'
            label='Description'
            name='description'
            value={description}
            margin='normal'
            fullWidth
            multiline
            rows={4}
            onChange={(e) => onChange(e)}
            variant='outlined'
            className={classes.field}
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
          <Link href='/dashboard' color='secondary'>
            Go Back
          </Link>
        </form>
      </Container>
    </Container>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
