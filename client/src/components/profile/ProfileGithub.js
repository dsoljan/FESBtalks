import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profile';
import { Typography, Link, Divider, Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ProfilGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div>
      <Typography variant='h4'>Github Repos</Typography>
      <Divider />
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <List
            key={repo._id}
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <ListItem>
              <Typography variant='h6'>
                <Link
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                  <Typography variant='caption'></Typography>
                </Link>
              </Typography>
              <ListItem>
                <Typography variant='caption'>{repo.description}</Typography>
              </ListItem>
            </ListItem>
            <Box display={{ xs: 'none', md: 'block' }}>
              <ListItem>
                <ListItem>Stars: {repo.stargazers_count}</ListItem>
                <ListItem>Watchers: {repo.watchers_count}</ListItem>
                <ListItem>Forks: {repo.forks_count}</ListItem>
              </ListItem>
            </Box>
          </List>
        ))
      )}
    </div>
  );
};

ProfilGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});
export default connect(mapStateToProps, { getGithubRepos })(ProfilGithub);
