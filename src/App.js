import "./App.css";
import "./form.css";
import { useState } from 'react';
import BulletList from "./components/BulletList";
import Button from "./components/Button";
import Error from "./components/Error";
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
  const [isPassOneLowerCase, setIsPassOneLowerCase] = useState(false);
  const [isPassOneUpperCase, setIsPassOneUpperCase] = useState(false);
  const [isPassLongEnough, setIsPassLongEnough] = useState(false);
  const [isPassOneNum, setIsPassOneNum] = useState(false);
  const [isPassSpecialChar, setIsPassSpecialChar] = useState(false);
  const [isCheckboxTicked, setIsCheckboxTicked] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isUsernameTouched, setIsUsernameTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const isValid = !isEmailValid || !isUsernameLowerCase || !isPassOneLowerCase || !isPassOneUpperCase || !isPassLongEnough || !isPassOneNum || !isPassSpecialChar || !isCheckboxTicked
  const isPasswordValid = !isPassOneLowerCase || !isPassOneUpperCase || !isPassLongEnough || !isPassOneNum || !isPassSpecialChar


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
    const matches = str.match(/[ -/:-@[-`{-~]/)
    return matches !== null
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
    setIsPassOneLowerCase(hasLowerCase(localPassword))
    setIsPassOneUpperCase(hasUpperCase(localPassword))
    setIsPassLongEnough(localPassword.length >= 8)
    setIsPassOneNum(hasNumber(localPassword))
    setIsPassSpecialChar(hasSpecialChar(localPassword))
  }

  const handleCheckboxClick = (event) => {
    const localState = event.target.checked
    setIsCheckboxTicked(localState)
  };

  const handleOnBlur = (event) => {

    switch (event.target.id) {
      case "email":
        setIsEmailTouched(true)
        break;
      case "username":
        setIsUsernameTouched(true)
        break;
      case "password":
        setIsPasswordTouched(true)
    }
};

const handleOnFocus = (event) => {

  switch (event.target.id) {
    case "email":
      setIsEmailTouched(false)
      break;
    case "username":
      setIsUsernameTouched(false)
      break;
    case "password":
      setIsPasswordTouched(false)
  }
}

  return (
    <div className="App">
      <Header>Welcome to Mailchimp</Header>

      <Subheader>Find your people. Engage your customers. Build your brand. Do it all with Mailchimp's Marketing Platform. Already have an account. <a className="link link--nodecoration" href="www.google.com">Log in</a></Subheader>

      <form>
        <Field type="text" id="email" value={email} onChange={handleEmailChange} onBlur={handleOnBlur} onFocus={handleOnFocus} label="Email"></Field>
        {(isEmailTouched && !isEmailValid) && <Error message="Invalid email address"/>}
        <Field type="text" id="username" value={username} onChange={handleUsernameChange} onBlur={handleOnBlur} onFocus={handleOnFocus} label="Username"></Field>
        {(isUsernameTouched && !isUsernameLowerCase) && <Error message="Invalid username"/>}
        <Field type="password" id="password" value={password} onChange={handlePasswordChange} onBlur={handleOnBlur} onFocus={handleOnFocus} label="Password"></Field>
        {(isPasswordTouched && isPasswordValid) && <Error message="Invalid password"/>}
        <BulletList isPassOneLowerCase={isPassOneLowerCase} isPassOneUpperCase={isPassOneUpperCase} isPassLongEnough={isPassLongEnough} isPassOneNum={isPassOneNum} isPassSpecialChar={isPassSpecialChar}/>
        
        <div className="button-wrapper">
          <Button disabled={isValid}/>
          <Checkbox onClick={handleCheckboxClick}/>
        </div> 
      </form>

      <Footer>By clicking the "Sign Up" button, you are creating a Mailchimp account, and you agree to Mailchimp's <a className="link" href="www.google.com">Terms of Use</a> and <a className="link" href="www.google.com">Privacy Policy.</a></Footer>
    </div>
  );
}

export default App;
