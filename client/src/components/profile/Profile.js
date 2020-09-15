import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileAbout from './ProfileAbout';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Button,
  Typography,
  Container,
  Divider,
  Grid,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    backgroundColor: 'black',
    height: 'max-content',
    padding: '2em 0 0 0',
    flexGrow: '1',
  },
  paper: {
    padding: theme.spacing(2),
    background: 'black',
  },
  container: {
    background: 'transparent',
  },
}));

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  return (
    <Container>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Card className={classes.root}>
          <Button href='/profiles' variant='outlined' style={{ margin: '1em' }}>
            Back to Profiles
          </Button>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Button href='/edit-profile' variant='outlined'>
                Edit Profile
              </Button>
            )}
          <Grid container spacing={3}>
            <Grid item md={6} style={{ textAlign: 'center' }}>
              <Paper className={classes.paper}>
                {' '}
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
              </Paper>
            </Grid>

            <Grid item md={6}>
              <Paper className={classes.paper}>
                {' '}
                <Typography variant='h4'>Experience</Typography>
                <Divider />
                {profile.experience.length > 0 ? (
                  <div>
                    {profile.experience.map((experience) => (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                  </div>
                ) : (
                  <h4>No experience credentials</h4>
                )}
                <Typography variant='h4'>Education</Typography>
                <Divider />
                {profile.education.length > 0 ? (
                  <div>
                    {profile.education.map((education) => (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    ))}
                  </div>
                ) : (
                  <h4>No education credentials</h4>
                )}
                {profile.githubusername && (
                  <ProfileGithub username={profile.githubusername} />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Card>
      )}
    </Container>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
