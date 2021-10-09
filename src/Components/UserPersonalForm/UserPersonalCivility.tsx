import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { UserPersonalContext } from './UserPersonalContext';

export const UserPersonalCivility = () => {
  const {
    contextValue: { userPersonalState, setUserPersonalState },
  } = useContext(UserPersonalContext);

  return (
    <>
      <Typography variant="subtitle1" gutterBottom component="div">
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
    </>
  );
};
