import { createContext } from 'react';

export const DEFAULT_STATE = {
  firstName: '',
  lastName: '',
};

export const UserPersonalContext = createContext({
  contextValue: {
    userPersonalState: DEFAULT_STATE,
    setUserPersonalState: function identity(arg: any): any {
      return arg;
    },
  },
});
