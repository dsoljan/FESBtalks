import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import {
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import Typography from '@material-ui/core/Typography';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <TableRow key={exp._id}>
      <TableCell>{exp.company}</TableCell>
      <TableCell>{exp.title}</TableCell>
      <TableCell>
        <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          'now'
        ) : (
          <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
        )}
      </TableCell>
      <TableCell>
        <Button color='secondary' onClick={() => deleteExperience(exp._id)}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));
  return (
    <Box padding='2em 4em'>
      <Typography variant='h5' style={{ color: '#7085b7' }}>
        Experience Credentials
      </Typography>
      <Table>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Years</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          {!experiences ? (
            <p>You haven't added experiences yet.</p>
          ) : (
            <TableBody>{experiences}</TableBody>
          )}
        </TableContainer>
      </Table>
    </Box>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
