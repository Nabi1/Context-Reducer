import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { UserPersonalContext } from './UserPersonalContext';

export const UserPersonalAddresse = () => {
  const {
    contextValue: { userPersonalState, setUserPersonalState },
  } = useContext(UserPersonalContext);

  return (
    <>
      <Typography variant="subtitle1" gutterBottom component="div">
        Addresse Info
      </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Adresse"
        value={userPersonalState.mainAddresse}
        onChange={(e) =>
          setUserPersonalState({
            method: 'setMainAddresse',
            firstName: e.target.value,
          })
        }
      />
      <TextField
        id="outlined-multiline-flexible"
        label="City"
        value={userPersonalState.city}
        onChange={(e) =>
          setUserPersonalState({
            method: 'setCity',
            lastName: e.target.value,
          })
        }
      />
    </>
  );
};
