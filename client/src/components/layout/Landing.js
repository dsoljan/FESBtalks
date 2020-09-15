import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../img/logo_transparent.png';
import { Button, Box, Link } from '@material-ui/core';
import { AnimateOnChange } from 'react-animation';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Box
      className='landing'
      display='flex'
      flexDirection='row'
      justifyContent='center'
    >
      <Box style={{ margin: '1em 0' }}>
        <Link href='/dashboard'>
          <AnimateOnChange>
            <img
              src={Logo}
              alt=''
              style={{ height: '450px', width: '450px' }}
            ></img>
          </AnimateOnChange>
        </Link>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          margin='-2em 0 0 0'
        >
          <h4>Share posts and find jobs within the community</h4>
          <span display='flex'>
            <Button
              variant='contained'
              color='primary'
              size='large'
              href='/register'
            >
              Sign Up
            </Button>
            <Button
              variant='contained'
              style={{ margin: '0 2em' }}
              size='large'
              href='/login'
            >
              Login
            </Button>
          </span>
        </Box>
      </Box>
    </Box>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
