import React from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';


function App() {
  return (
    <div className="App">
      <h1>Custom Hooks with Forms Example</h1>
      
      <div>
        <h2>Login Form</h2>
        <LoginForm />
      </div>

      <div>
        <h2>Signup Form</h2>
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
