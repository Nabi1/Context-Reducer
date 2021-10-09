import React, { useMemo, useReducer } from 'react';

import { UserPersonalContext, DEFAULT_STATE } from './UserPersonalContext';

const userPersonalStateReducer = (
  previousFormState: {
    firstName: string;
    lastName: string;
    mainAddresse: string;
    city: string;
  },
  action: {
    method: any;
    firstName: string;
    lastName: string;
    mainAddresse: string;
    city: string;
  },
) => {
  const userPersonalState = { ...previousFormState };

  switch (action.method) {
    case 'setFirstName':
      userPersonalState.firstName = action.firstName;
      break;
    case 'setLastName':
      userPersonalState.lastName = action.lastName;
      break;
    case 'setMainAddresse':
      userPersonalState.mainAddresse = action.mainAddresse;
      break;
    case 'setCity':
      userPersonalState.city = action.city;
      break;
    default:
  }

  return userPersonalState;
};

const UserPersonalFormProvider = ({ children }: any) => {
  const [userPersonalState, setUserPersonalState] = useReducer(
    userPersonalStateReducer,
    DEFAULT_STATE,
  );

  const contextValue = useMemo(
    () => ({
      userPersonalState,
      setUserPersonalState,
    }),
    [userPersonalState],
  );

  return (
    <UserPersonalContext.Provider value={{ contextValue }}>
      {children}
    </UserPersonalContext.Provider>
  );
};

export default UserPersonalFormProvider;
