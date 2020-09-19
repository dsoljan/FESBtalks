import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RoomIcon from '@material-ui/icons/Room';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2em',
    paddingTop: '1em',
  },
  media: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1em',
    borderRadius: '20em',
    maxHeight: '40%',
  },
  side: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography>
          {location && (
            <RoomIcon
              style={{
                paddingTop: '10px',
              }}
            />
          )}
          {location && <span>{location}</span>}
        </Typography>
        <CardContent>
          <img className={classes.media} src={avatar} alt='' />
          <Box className={classes.side}>
            <div>
              <Typography gutterBottom variant='h5' component='h2'>
                {name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {status} {company && <span> at {company}</span>}
              </Typography>
            </div>
            <div>
              {skills.slice(0, 4).map((skill, index) => (
                <p key={index}>
                  <CheckIcon />
                  {skill}
                </p>
              ))}
            </div>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={`/profile/${_id}`} size='small'>
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
