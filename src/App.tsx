import React from 'react';

import logo from './logo.svg';
import './App.css';
import { UserPersonalForm } from './Components/UserPersonalForm/UserPersonalForm';
import { UserProfessionalForm } from './Components/UserProfessionalForm/UserProfessionalForm';
import UserPersonalFormProvider from './Components/UserPersonalForm/UserPersonalProvider';
import UserProfessionalFormProvider from './Components/UserProfessionalForm/UserProfessionalProvider';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* Wrap the below Provider to see if its useMemo is working */}
      <UserPersonalFormProvider>
        <UserPersonalForm />
      </UserPersonalFormProvider>
      {/* Wrap the above Provider to see if its useMemo is working */}
      <UserProfessionalFormProvider>
        <UserProfessionalForm />
      </UserProfessionalFormProvider>
    </div>
  );
}

export default App;
