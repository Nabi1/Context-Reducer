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
      <UserPersonalFormProvider>
        <UserPersonalForm />
      </UserPersonalFormProvider>

      <UserProfessionalForm />
    </div>
  );
}

export default App;
