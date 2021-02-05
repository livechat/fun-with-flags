import "./App.css";
import "./form.css";
import {useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import SubHeader from './SubHeader'
import Form from './Form'

function App() {
  return (
    <div className="App wrapper">
      {/* Header component */}
      <Header>Welcome to Mailchimp</Header>

      {/* SubHeader component */}
      <SubHeader>Find your people. Engage your customers. Build your brand. Do it all with Mailchimp's Marketing Platform. Already have an account? Log in</SubHeader>

      <Form></Form>

      {/* Footer component */}
      <Footer>By clicking the "Sign Up" button, you are creating a Mailchimp account, and you agree to Mailchimp's Terms of Use and Privacy Policy.</Footer>
    </div>
  );
}

export default App;
