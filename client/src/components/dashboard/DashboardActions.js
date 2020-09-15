import React from 'react';
import { Button, Box } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export const DashboardActions = () => {
  return (
    <Box padding='2em 3em'>
      <Button
        href='/edit-profile'
        variant='outlined'
        style={{ margin: '0 1em' }}
      >
        <PersonIcon />
        {' '} Edit Profile
      </Button>
      <Button
        href='/add-experience'
        variant='outlined'
        style={{ margin: '0 1em' }}
      >
        <WorkIcon />
        {' '} Add Experience
      </Button>
      <Button
        href='/add-education'
        variant='outlined'
        style={{ margin: '0 1em' }}
      >
        <LibraryBooksIcon />
        {' '} Add Education
      </Button>
    </Box>
  );
};

export default DashboardActions;
