import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const UserProfessionalForm = () => {
  const [jobName, setJobsName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [startDate, setStartDate] = useState('2017-05-24');

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
        value={jobName}
        onChange={(e) => setJobsName(e.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Company name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <TextField
        id="date"
        label="Start date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
    </Box>
  );
};
