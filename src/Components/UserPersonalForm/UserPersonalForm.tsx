import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { UserPersonalContext } from './UserPersonalContext';

export const UserPersonalForm = () => {
  const { setUserPersonalState, userPersonalState } =
    useContext(UserPersonalContext);

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
      <TextField
        id="outlined-multiline-flexible"
        label="Firstname"
        value={userPersonalState.firstName}
        onChange={(e) =>
          setUserPersonalState({
            method: 'setFirstName',
            firstName: e.target.value,
          })
        }
      />
      <TextField
        id="outlined-multiline-flexible"
        label="LastName"
        value={userPersonalState.lastName}
        onChange={(e) =>
          setUserPersonalState({
            method: 'setLastName',
            lastName: e.target.value,
          })
        }
      />
    </Box>
  );
};
