import { useState } from 'react'
import "./App.css";
import "./form.css";

import Header from "./components/Header";
import Subheader from "./components/Subheader"
import Button from "./components/Button"
import Footer from "./components/Footer"
import Field from "./components/Field"
import BulletList from "./components/BulletList";
import Error from "./components/Error"
import Helper from './components/Helper';



function App() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [emailValidator, setEmailValidator] = useState(null)
  const [usernameValidator, setUsernameValidator] = useState(null)

  const [lowerCaseValidator, setLowerCaseValidator] = useState(false);
  const [upperCaseValidator, setUpperCaseValidator] = useState(false);
  const [requredCharacterValidator, setRequredCharacterValidator] = useState(false);
  const [numberValidator, setNumberValidator] = useState(false);
  const [specialCharacterValidator, setSpecialCharacterValidator] = useState(false);

  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isUsernameTouched, setIsUsernameTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const [showUsernameHelper, setShowUsernameHelper] = useState(false);

  //validations

  const validForm = !emailValidator && !usernameValidator && lowerCaseValidator && upperCaseValidator && requredCharacterValidator && numberValidator && specialCharacterValidator
  const isPasswordValid = lowerCaseValidator && upperCaseValidator && requredCharacterValidator && numberValidator && specialCharacterValidator

  //email section
  const validateEmail = (email) => {
    const containsAt = email.includes('@')
    setEmailValidator(containsAt ? null : 'Email is not vaild')
  }

  const validateUserName = (userName) => {
    const isLowerCase = userName === userName.toLowerCase()
    setUsernameValidator(isLowerCase && userName ? null : 'Username must be lower case')
  }

  const validatePassword = (userPassword) => {
    const isLowerCase = /[a-z]/.test(userPassword);
    setLowerCaseValidator(isLowerCase)
    const isUpperCase = /[A-Z]/.test(userPassword);
    setUpperCaseValidator(isUpperCase)
    setRequredCharacterValidator(userPassword.length >= 8)
    const hasNumber = userPassword.match(/\d+/g)
    setNumberValidator(!!hasNumber)
    const specialChar = userPassword.match(/[ -/:-@[-`{-~]/)
    setSpecialCharacterValidator(!!specialChar)
  }

  const handleEmailChange = (e) => {
    const email = e.target.value
    validateEmail(email)
    setEmail(email)
  }

  // username section

  const handleUsernameChange = (e) => {
    const userName = e.target.value
    validateUserName(userName)
    setUsername(userName)
  }

  //password section

  const handlePasswordChange = (e) => {
    const userPassword = e.target.value
    validatePassword(userPassword)
    setPassword(userPassword)

  }

  //blur and foocus

  const handleBlur = (e) => {
    switch (e.target.id) {
      case "email":
        setIsEmailTouched(true)
        validateEmail(e.target.value)
        break;
      case "username":
        setIsUsernameTouched(true)
        setShowUsernameHelper(false)
        validateUserName(e.target.value)
        break;
      case "password":
        setIsPasswordTouched(true)
        validatePassword(e.target.value)
    }
  }

  const handleFocus = (e) => {
    switch (e.target.id) {
      case "email":
        setIsEmailTouched(false)
        break;
      case "username":
        setIsUsernameTouched(false)
        setShowUsernameHelper(true)
        break;
      case "password":
        setIsPasswordTouched(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="App">
      <div className="formWrapper">

        <Header>Welcome to Mailchimp</Header>

        <Subheader>Find your people. Engage your customers. Build your brand. Do it all with Mailchimp’s Marketing Platform. Already have an account? Log in</Subheader>


        <form onSubmit={handleSubmit} autoComplete="off">


          <Field type="text" id="email" value={email} onChange={handleEmailChange} onBlur={handleBlur} onFocus={handleFocus} label="Email"></Field>
          {(isEmailTouched && emailValidator) && <Error message="Invalid email address" />}

          <Field type="text" id="username" value={username} onChange={handleUsernameChange} onBlur={handleBlur} onFocus={handleFocus} label="Username"></Field>
          {(isUsernameTouched && usernameValidator) && <Error message="Invalid username" />}
          {showUsernameHelper && <Helper message="Choose a username that contains only letters and numbers, or use your email address. This is for login only. " />}

          <Field type="password" id="password" value={password} onChange={handlePasswordChange} onBlur={handleBlur} onFocus={handleFocus} label="Password"></Field>
          {(isPasswordTouched && !isPasswordValid) && <Error message="Invalid password" />}

          <BulletList lowerCaseValidator={lowerCaseValidator} upperCaseValidator={upperCaseValidator} requredCharacterValidator={requredCharacterValidator} numberValidator={numberValidator} specialCharacterValidator={specialCharacterValidator} />

          <div className="buttton-wrapper">
            <Button disabled={!validForm || (!isEmailTouched && !isPasswordTouched && !isUsernameTouched)} />
          </div>
        </form>

        <Footer>By clicking the "Sign Up" button, you are creating a Mailchimp account, and you agree to Mailchimp's Terms of Use and Privacy Policy.</Footer>
      </div>
    </div>
  )
}


export default App;