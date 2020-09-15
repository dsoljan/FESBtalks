import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div>
    {bio && (
      <Fragment>
        <Typography variant='h6' style={{ color: '#7085b7' }}>
          {name.trim().split(' ')[0]}'s Bio
        </Typography>
        <Typography variant='body1'> {bio}</Typography>
      </Fragment>
    )}

    <Typography variant='h6' style={{ color: '#7085b7' }}>
      Skill Set
    </Typography>
    <div>
      {skills.map((skill, index) => (
        <div key={index}>
          <CheckIcon />
          {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
