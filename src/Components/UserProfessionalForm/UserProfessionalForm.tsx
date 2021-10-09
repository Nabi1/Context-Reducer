import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { UserProfessionalContext } from './UserProfessionalContext';

export const UserProfessionalForm = () => {
  const {
    contextValue: { userProfessionalState, setUserProfessionalState },
  } = useContext(UserProfessionalContext);

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
        Profesionnal Info
      </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Job name"
        value={userProfessionalState.jobName}
        onChange={(e) =>
          setUserProfessionalState({
            method: 'setJobsName',
            jobName: e.target.value,
          })
        }
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Company name"
        value={userProfessionalState.companyName}
        onChange={(e) =>
          setUserProfessionalState({
            method: 'setCompanyName',
            companyName: e.target.value,
          })
        }
      />
      <TextField
        id="date"
        label="Start date"
        type="date"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        value={userProfessionalState.startDate}
        onChange={(e) =>
          setUserProfessionalState({
            method: 'setStartDate',
            startDate: e.target.value,
          })
        }
      />
    </Box>
  );
};
