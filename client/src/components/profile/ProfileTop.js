import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div>
      <img src={avatar} alt='' style={{ borderRadius: '10em' }} />
      <Typography component='h3' variant='h4' gutterBottom>
        {name}
      </Typography>
      <Typography variant='h5' component='h6' gutterBottom>
        {status} {company && <span>at {company}</span>}
      </Typography>

      {location && <span>{location}</span>}
      <Typography variant='h5' component='h6' gutterBottom>
        {website && (
          <Link href={website} target='_blank' rel='noopener noreferrer'>
            <LanguageIcon />
          </Link>
        )}
        {social && social.twitter && (
          <Link href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <TwitterIcon />
          </Link>
        )}
        {social && social.facebook && (
          <Link
            href={social.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FacebookIcon />
          </Link>
        )}
        {social && social.linkedin && (
          <Link
            href={social.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </Link>
        )}
        {social && social.youtube && (
          <Link href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <YouTubeIcon />
          </Link>
        )}
        {social && social.instagram && (
          <Link
            href={social.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon />
          </Link>
        )}
      </Typography>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
