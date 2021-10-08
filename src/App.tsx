import React from 'react';

import logo from './logo.svg';
import './App.css';
import { UserPersonalForm } from './Components/UserPersonalForm/UserPersonalForm';
import { UserProfessionalForm } from './Components/UserProfessionalForm/UserProfessionalFor';
import UserPersonalFormProvider from './Components/UserPersonalForm/UserPersonalProvider';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* Wrap the below Provider to see if its useMemo is working */}
      <UserPersonalFormProvider>
        <UserPersonalForm />
        {/* Replace the above UserPersonalForm by an HOC like UserPersonalFormContainer to show */}
        {/* that grand children can access to the context value without passing any props  */}
      </UserPersonalFormProvider>
      {/* Wrap the above Provider to see if its useMemo is working */}
      <UserProfessionalForm />
    </div>
  );
}

export default App;
