import { createContext } from 'react';

export const DEFAULT_STATE = {
  firstName: '',
  lastName: '',
  city: '',
  mainAddresse: '',
};

export const UserPersonalContext = createContext({
  contextValue: {
    userPersonalState: DEFAULT_STATE,
    setUserPersonalState: (arg: any): any => arg,
  },
});
