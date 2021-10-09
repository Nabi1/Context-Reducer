import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import { UserPersonalAddresse } from './UserPersonalAddresse';
import { UserPersonalCivility } from './UserPersonalCivility';

export const UserPersonalForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" gutterBottom component="div">
        Personal Info
      </Typography>
      <UserPersonalAddresse />
      <UserPersonalCivility />
    </Box>
  );
};
