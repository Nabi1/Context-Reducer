import { createContext } from 'react';

export const DEFAULT_STATE = {
  jobName: '',
  companyName: '',
  startDate: '',
};

export const FormContext = createContext({
  userProfessionalState: DEFAULT_STATE,
  setUserProfessionalState: null,
});
