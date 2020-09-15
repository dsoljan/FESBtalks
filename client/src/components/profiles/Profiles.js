import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';
import { Typography, Container, Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
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
            Profiles
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            style={{ paddingLeft: '3em' }}
          >
            Browse and connect with people
          </Typography>
          <Box align='center'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile}></ProfileItem>
              ))
            ) : (
              <Container
                style={{
                  background: 'black',
                  height: '75vh',
                }}
              >
                No profiles found
              </Container>
            )}
          </Box>
        </Container>
      )}
    </Fragment>
  );
};
Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
