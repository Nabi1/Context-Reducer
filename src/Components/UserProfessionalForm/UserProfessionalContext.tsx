import { createContext } from 'react';

export const DEFAULT_STATE = {
  jobName: '',
  companyName: '',
  startDate: '2017-05-24',
};

export const UserProfessionalContext = createContext({
  contextValue: {
    userProfessionalState: DEFAULT_STATE,
    setUserProfessionalState: (arg: any): any => arg,
  },
});
