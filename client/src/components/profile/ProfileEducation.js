import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Typography } from '@material-ui/core';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <Typography variant='h6' color='primary'>
      {school}
    </Typography>
    <p>
      <Moment format='DD/MM/YYYY' style={{ color: 'grey' }}>
        {from}
      </Moment>{' '}
      -{' '}
      {!to ? (
        <span style={{ color: 'grey' }}>Now</span>
      ) : (
        <Moment format='DD/MM/YYYY' style={{ color: 'grey' }}>
          {to}
        </Moment>
      )}
    </p>
    <p>
      <strong style={{ color: '#7085b7' }}>Degree: </strong> {degree}
    </p>
    <p>
      <strong style={{ color: '#7085b7' }}>Field of study: </strong>{' '}
      {fieldofstudy}
    </p>
    <p>
      <strong style={{ color: '#7085b7' }}>Description: </strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
