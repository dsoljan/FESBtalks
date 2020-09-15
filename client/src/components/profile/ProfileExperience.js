import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Typography } from '@material-ui/core';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div>
    <span>
      <Typography variant='h6' color='primary'>
        {company}
      </Typography>
      <p>
        <Moment inline format='DD/MM/YYYY' style={{ color: 'grey' }}>
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
    </span>
    <p>
      <strong style={{ color: '#7085b7' }}>Position: </strong> {title}
    </p>
    <p>
      <strong style={{ color: '#7085b7' }}>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
