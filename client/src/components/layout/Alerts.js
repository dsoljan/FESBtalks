import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { Container } from '@material-ui/core';

const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Container maxWidth='lg' style={{ padding: '1em 0' }}>
      <Alert variant='filled' key={alert.id} severity={`${alert.alertType}`}>
        {alert.msg}
      </Alert>
    </Container>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alerts);
