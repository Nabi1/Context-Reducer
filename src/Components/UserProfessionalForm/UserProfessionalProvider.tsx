import React, { useMemo, useReducer } from 'react';

import {
  UserProfessionalContext,
  DEFAULT_STATE,
} from './UserProfessionalContext';

const userProfessionalStateReducer = (
  previousFormState: {
    jobName: string;
    companyName: string;
    startDate: string;
  },
  action: {
    method: any;
    jobName: string;
    companyName: string;
    startDate: string;
  },
) => {
  const userProfessionalState = { ...previousFormState };

  switch (action.method) {
    case 'setJobName':
      userProfessionalState.jobName = action.jobName;
      break;
    case 'setCompanyName':
      userProfessionalState.companyName = action.companyName;
      break;
    case 'setStartDate':
      userProfessionalState.startDate = action.startDate;
      break;
    default:
  }

  return userProfessionalState;
};

const UserProfessionalFormProvider = ({ children }: any) => {
  const [userProfessionalState, setUserProfessionalState] = useReducer(
    userProfessionalStateReducer,
    DEFAULT_STATE,
  );

  const contextValue = useMemo(
    () => ({
      userProfessionalState,
      setUserProfessionalState,
    }),
    [userProfessionalState],
  );

  return (
    <UserProfessionalContext.Provider value={{ contextValue }}>
      {children}
    </UserProfessionalContext.Provider>
  );
};

export default UserProfessionalFormProvider;
