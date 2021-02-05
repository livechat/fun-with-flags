import { useState } from 'react'
import "./App.css";
import "./form.css";

function Header({ children }) {
  return (<div>{children}</div>)
}

function Subheader({ children }) {
  return (<div>{children}</div>)
}

function Footer({ children }) {
  return (<div>{children}</div>)
}

function Button({ type, label, disabled }) {
  return (<button disabled={disabled} type={type}>{label}</button>)
}



function Field({ type, label, htmlFor, value, onChange }) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}:</label>
      <input id={htmlFor} type={type} value={value} onChange={onChange} />
    </div>
  )
}

const listaCopy = ['One lowercase character', 'One uppercase character', 'One number', 'One special character', '8 characters minimum']
const PasswordRequirements = () => {
  return (
    <ul class='reqList'>
      {listaCopy.map(copy => (
        <li>{copy}</li>
      ))}
    </ul>
  )
}

function App() {
  const [email, setEmail] = useState('')
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, emailSetError] = useState(null)
  const [usernameError, usernameSetError] = useState(null)
  const [passwordError, passwordSetError] = useState(null)

  const handleEmailChange = (e) => {
    const email = e.target.value
    const containsAt = email.includes('@')
    emailSetError(containsAt ? null : 'Email is not vaild')
    console.log(containsAt)
    setEmail(email)
  }

  const handleUsernameChange = (e) => {
    const userName = e.target.value
    const isLowerCase = userName === userName.toLowerCase()
    usernameSetError(isLowerCase ? null : 'Username must be lower case')
    console.log(isLowerCase)
    setUsername(userName)
  }

  const handlePasswordChange = (e) => {
    const password = e.target.value
    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const passwordValidator = regex.test(password)
    passwordSetError(passwordValidator ? null : 'Field is required and has 1 lowercase, 1 uppercase, 1 number, 1 special character, 8 characters minium')
    console.log(passwordValidator)
    setPassword(password)
  }


  function handleSubmit(event) {
    event.preventDefault()
    alert('Form submitted');
  }

  return (
    <div className="App">
      <Header>Welcome to Mailchimp</Header>

      <Subheader>Find your people. Engage your customers. Build your brand. Do it all with Mailchimp’s Marketing Platform. Already have an account? Log in</Subheader>


      <form onSubmit={handleSubmit}>

        <Field type="text" label="eMail" value={email} onChange={handleEmailChange} htmlFor="eMailInput" />

        <div role="alert" style={{ color: 'red' }}>
          {emailError}
        </div>

        <Field type="text" label="Username" value={userName} onChange={handleUsernameChange} htmlFor="usernameInput" />

        <div role="alert" style={{ color: 'red' }}>
          {usernameError}
        </div>

        <Field type="password" label="Password" value={password} onChange={handlePasswordChange} htmlFor="passwordInput" />

        <div role="alert" style={{ color: 'red' }}>
          {passwordError}
        </div>

        <PasswordRequirements />

        <Button disabled={Boolean(emailError) || Boolean(usernameError) || Boolean(passwordError)} type="submit" label="Submit"></Button>

      </form>

      <Footer>By clicking the "Sign Up" button, you are creating a Mailchimp account, and you agree to Mailchimp's Terms of Use and Privacy Policy.</Footer>

    </div>
  )
}


export default App;
