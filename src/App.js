import "./App.css";
import "./form.css";
import { useState } from 'react';
import BulletList from "./components/BulletList";
import Button from "./components/Button";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Field from "./components/Field";
import Footer from "./components/Footer";
import Checkbox from "./components/Checkbox";

const App = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isUsernameLowerCase, setIsUsernameLowerCase] = useState(false);
  const [isPassOneLowerCase, setIsPassOneLowerCase] = useState(true);
  const [isPassOneUpperCase, setIsPassOneUpperCase] = useState(true);
  const [isPassLongEnough, setIsPassLongEnough] = useState(true);
  const [isPassOneNum, setIsPassOneNum] = useState(true);
  const [isPassSpecialChar, setIsPassSpecialChar] = useState(true);

  const hasLowerCase = (str) => {
    return str.toUpperCase() !== str;
  };

  const hasUpperCase = (str) => {
    return str.toLowerCase() !== str;
  };

  const hasNumber = (str) => {
    const matches = str.match(/\d+/g);
    return matches !== null
  };
  
  const hasSpecialChar = (str) => {
    const format = /[ -/:-@[-`{-~]/;
    return format.test(str);
  };

  const handleEmailChange = (event) => {
    const localEmail = event.target.value
    setEmail(localEmail)
    setIsEmailValid(localEmail.includes('@'));
  };

  const handleUsernameChange = (event) => {
    const localUsername = event.target.value
    setUsername(localUsername);
    const isLowerCase = localUsername === localUsername.toLowerCase()
    setIsUsernameLowerCase(isLowerCase);
  };

  const handlePasswordChange = (event) => {
    const localPassword = event.target.value
    setPassword(localPassword)

    hasLowerCase(localPassword) ? setIsPassOneLowerCase(true) : setIsPassOneLowerCase(false)

    hasUpperCase(localPassword) ? setIsPassOneUpperCase(true) : setIsPassOneUpperCase(false)

    localPassword.length >= 8 ? setIsPassLongEnough(true) : setIsPassLongEnough(false)

    hasNumber(localPassword) ? setIsPassOneNum(true) : setIsPassOneNum(false)

    hasSpecialChar(localPassword) ? setIsPassSpecialChar(true) : setIsPassSpecialChar(false)

  }

  return (
    <div className="App">
      <Header>Welcome to Mailchimp</Header>

      <Subheader>Find your people. Engage your customers. Build your brand. Do it all with Mailchimp's Marketing Platform. Already have an account. <a className="link link--nodecoration" href="www.google.com">Log in</a></Subheader>

      <form>
        <Field type="text" id="email" value={email} onChange={handleEmailChange}>Email</Field>
        <Field type="text" id="username" value={username} onChange={handleUsernameChange}>Username</Field>
        <Field type="password" id="password" value={password} onChange={handlePasswordChange}>Password</Field>
        <BulletList isPassOneLowerCase={isPassOneLowerCase} isPassOneUpperCase={isPassOneUpperCase} isPassLongEnough={isPassLongEnough} isPassOneNum={isPassOneNum} isPassSpecialChar={isPassSpecialChar}/>
        
        <div className="button-wrapper">
          <Button disabled={!isEmailValid || !isUsernameLowerCase || !isPassOneLowerCase || !isPassOneUpperCase || !isPassLongEnough || !isPassOneNum || !isPassSpecialChar}/>
          <Checkbox/>
        </div> 
      </form>

      <Footer>By clicking the "Sign Up" button, you are creating a Mailchimp account, and you agree to Mailchimp's <a className="link" href="www.google.com">Terms of Use</a> and <a className="link" href="www.google.com">Privacy Policy.</a></Footer>
    </div>
  );
}

export default App;
