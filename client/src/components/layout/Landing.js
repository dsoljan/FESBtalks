import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../img/logo_transparent.png';
import { Button } from '@material-ui/core';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <Link
            to='/dashboard'
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <img
              src={Logo}
              alt=''
              style={{ margin: 'auto', height: '400px', width: '400px' }}
            ></img>
          </Link>

          <p className='lead'>Share posts and find jobs within the community</p>
          <span>
            <Button
              variant='contained'
              color='primary'
              style={{ margin: '0 2em' }}
            >
              <Link to='/register'>Sign Up</Link>
            </Button>
            <Button variant='contained' style={{ margin: '0 2em' }}>
              <Link to='/login'>Login</Link>
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
