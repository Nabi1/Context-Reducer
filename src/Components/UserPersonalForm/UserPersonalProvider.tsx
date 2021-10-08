import React, { useReducer } from 'react';

import { UserPersonalContext, DEFAULT_STATE } from './UserPersonalContext';

function userPersonalStateReducer(
  previousFormState: { firstName: string; lastName: string },
  action: { method: any; firstName: string; lastName: string },
) {
  const userPersonalState = { ...previousFormState };

  switch (action.method) {
    case 'setFirstName':
      userPersonalState.firstName = action.firstName;
      break;
    case 'setLastName':
      userPersonalState.lastName = action.lastName;
      break;
    default:
  }
  return userPersonalState;
}

const UserPersonalFormProvider = ({ children }: any) => {
  const [userPersonalState, setUserPersonalState] = useReducer(
    userPersonalStateReducer,
    DEFAULT_STATE,
  );

  return (
    <UserPersonalContext.Provider
      value={{
        userPersonalState,
        setUserPersonalState,
      }}
    >
      {children}
    </UserPersonalContext.Provider>
  );
};

export default UserPersonalFormProvider;
