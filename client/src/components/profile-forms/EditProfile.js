import React, { useState, Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import {
  MenuItem,
  Select,
  TextField,
  CssBaseline,
  Container,
  Link,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2em',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  field: {
    margin: '0.75em',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(', '),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
    });
  }, [loading, getCurrentProfile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  const classes = useStyles();

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
        Edit Your Profile
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        style={{ paddingLeft: '3em' }}
      >
        {' '}
        Add some changes to your profile
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
        <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
          <Select
            name='status'
            value={status}
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => onChange(e)}
            className={classes.field}
          >
            <MenuItem value='0'>* Select Status</MenuItem>
            <MenuItem value='Developer'>Developer</MenuItem>
            <MenuItem value='Junior Developer'>Junior Developer</MenuItem>
            <MenuItem value='Senior Developer'>Senior Developer</MenuItem>
            <MenuItem value='Manager'>Manager</MenuItem>
            <MenuItem value='Student or Learning'>Student or Learning</MenuItem>
            <MenuItem value='Instructor'>Instructor or Teacher</MenuItem>
            <MenuItem value='Intern'>Intern</MenuItem>
            <MenuItem value='Other'>Other</MenuItem>
          </Select>
          <p style={{ marginLeft: '1.5em' }} className={classes.field}>
            <Typography
              variant='caption'
              className='form-text'
              color='textSecondary'
            >
              Give us an idea of where you are at in your career
            </Typography>
          </p>

          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            id='outlined-company'
            label='Company'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            helperText='Could be your own company or one you work for'
            className={classes.field}
          />

          <TextField
            id='outlined-website'
            margin='normal'
            fullWidth
            label='Website'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
            variant='outlined'
            helperText=' Could be your own or a company website'
            className={classes.field}
          ></TextField>

          <TextField
            id='outlined-location'
            margin='normal'
            fullWidth
            label='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
            variant='outlined'
            helperText=' City and state suggested (eg. Boston, MA)'
            className={classes.field}
          ></TextField>

          <TextField
            id='outlined-skills'
            margin='normal'
            fullWidth
            required
            label='Skills'
            value={skills}
            name='skills'
            onChange={(e) => onChange(e)}
            variant='outlined'
            helperText=' Please use comma separated values (eg. HTML,CSS,PHP)'
            className={classes.field}
          ></TextField>

          <TextField
            id='outlined-github'
            margin='normal'
            fullWidth
            label='Github Username'
            name='githubusername'
            value={githubusername}
            onChange={(e) => onChange(e)}
            variant='outlined'
            helperText='If you want your latest repos and a Github link, include your username'
            className={classes.field}
          ></TextField>

          <TextField
            id='outlined-bio'
            margin='normal'
            fullWidth
            label='A short bio of yourself'
            name='bio'
            multiline
            rows={4}
            value={bio}
            onChange={(e) => onChange(e)}
            variant='outlined'
            helperText='Tell us a little about yourself'
            className={classes.field}
          ></TextField>

          <div>
            <Button
              type='submit'
              fullWidth
              variant='outlined'
              color='secondary'
              margin='normal'
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              className={classes.submit}
            >
              Add Social Network Links
            </Button>{' '}
          </div>

          {displaySocialInputs && (
            <Fragment>
              <Typography variant='caption' color='textSecondary'>
                This step is optional
              </Typography>
              <Box className={classes.social}>
                <TwitterIcon />
                <TextField
                  id='outlined-github'
                  label='Twitter URL'
                  name='twitter'
                  margin='normal'
                  fullWidth
                  value={twitter}
                  onChange={(e) => onChange(e)}
                  variant='outlined'
                  className={classes.field}
                ></TextField>
              </Box>
              <Box className={classes.social}>
                <FacebookIcon />
                <TextField
                  id='outlined-facebook'
                  label='Facebook URL'
                  name='facebook'
                  value={facebook}
                  margin='normal'
                  fullWidth
                  onChange={(e) => onChange(e)}
                  variant='outlined'
                  className={classes.field}
                ></TextField>
              </Box>
              <Box className={classes.social}>
                <YouTubeIcon />
                <TextField
                  id='outlined-youtube'
                  label='Youtube URL'
                  name='youtube'
                  value={youtube}
                  margin='normal'
                  fullWidth
                  onChange={(e) => onChange(e)}
                  variant='outlined'
                  className={classes.field}
                ></TextField>
              </Box>
              <Box className={classes.social}>
                <LinkedInIcon />
                <TextField
                  id='outlined-linkedin'
                  label='Linkedin URL'
                  name='linkedin'
                  value={linkedin}
                  margin='normal'
                  fullWidth
                  onChange={(e) => onChange(e)}
                  variant='outlined'
                  className={classes.field}
                ></TextField>
              </Box>
              <Box className={classes.social}>
                <InstagramIcon />
                <TextField
                  id='outlined-instagram'
                  label='Instagram URL'
                  name='instagram'
                  margin='normal'
                  fullWidth
                  value={instagram}
                  onChange={(e) => onChange(e)}
                  variant='outlined'
                  className={classes.field}
                ></TextField>
              </Box>
              <Button
                type='submit'
                fullWidth
                margin='normal'
                variant='contained'
                color='secondary'
                className={classes.submit}
              >
                Submit
              </Button>{' '}
              <Link href='/dashboard' color='secondary'>
                Go Back
              </Link>
            </Fragment>
          )}
        </form>
      </Container>
    </Container>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
