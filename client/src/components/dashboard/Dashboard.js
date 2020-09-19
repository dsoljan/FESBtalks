import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { DeleteRounded } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container
      component='main'
      //
      style={{
        background: 'black',
        height: 'fit-content',
        maxWidth: 'xs',
      }}
    >
      <CssBaseline />
      <Typography variant='h2' style={{ padding: '10px' }}>
        {' '}
        Dashboard
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        style={{ paddingLeft: '3em' }}
      >
        {' '}
        Welcome {user && user.name}!
      </Typography>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <Button
            variant='outlined'
            color='primary'
            style={{ margin: '2em 3em' }}
            onClick={() => deleteAccount()}
            startIcon={<DeleteRounded />}
          >
            Delete my account
          </Button>
        </Fragment>
      ) : (
        <Container
          style={{
            background: 'black',
            height: '73vh',
            padding: '3em 0 0 0',
          }}
        >
          <Typography variant='body1' style={{ paddingBottom: '2em' }}>
            You have not yet created a profile, please add some info.
          </Typography>
          <Button href='/create-profile' variant='outlined' color='primary'>
            Create profile
          </Button>
        </Container>
      )}
    </Container>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
