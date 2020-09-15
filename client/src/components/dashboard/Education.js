import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
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

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <TableRow key={edu._id}>
      <TableCell>{edu.school}</TableCell>
      <TableCell>{edu.degree}</TableCell>
      <TableCell>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          'now'
        ) : (
          <Moment format='DD/MM/YYYY'>{edu.to}</Moment>
        )}
      </TableCell>
      <TableCell>
        <Button color='secondary' onClick={() => deleteEducation(edu._id)}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));
  return (
    <Box padding='2em 4em'>
      <Typography variant='h5' style={{ color: '#7085b7' }}>
        Education Credentials
      </Typography>
      <Table>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>School</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Years</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{educations}</TableBody>
        </TableContainer>
      </Table>
    </Box>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
