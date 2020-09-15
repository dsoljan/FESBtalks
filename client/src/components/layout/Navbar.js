import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import logo_notext from '../../img/logo.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: { backgroundColor: 'transparent' },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();

  const authLinks = (
    <nav>
      <Link
        href='/profiles'
        variant='button'
        color='textPrimary'
        className={classes.link}
      >
        Profiles
      </Link>

      <Link
        href='/posts'
        variant='button'
        color='textPrimary'
        className={classes.link}
      >
        Posts
      </Link>

      <Link
        href='/dashboard'
        variant='button'
        color='textPrimary'
        className={classes.link}
      >
        Dashboard
      </Link>

      <Link
        href='/login'
        variant='button'
        color='textPrimary'
        className={classes.link}
        onClick={logout}
      >
        Logout
      </Link>
    </nav>
  );

  const guestLinks = (
    <nav>
      <Link
        href='/profiles'
        variant='button'
        color='textPrimary'
        className={classes.link}
      >
        Profiles
      </Link>
      <Link
        href='/register'
        variant='button'
        color='textPrimary'
        className={classes.link}
      >
        Register
      </Link>
      <Link
        href='/login'
        variant='button'
        color='textPrimary'
        className={classes.link}
      >
        Login
      </Link>
    </nav>
  );

  return (
    <Fragment>
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            <Link href='/dashboard'>
              <img
                src={logo_notext}
                alt=''
                style={{
                  width: '50px',
                  paddingTop: '10px',
                  marginLeft: '20px',
                }}
              />
            </Link>
          </Typography>

          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
