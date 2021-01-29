import "./App.css";
import "./form.css";
import {useState} from 'react'

function Header({children}) {
  return (
    <h1>{children}</h1>
  )
}

function SubHeader({children}) {
  return (
    <h2>{children}</h2>
  )
}

function Footer({children}) {
  return (
    <span className='footer'>{children}</span>
  )
}

function FormValidators() {
  return (
    <div className='form-validators__wrapper'>
      <div className='form-validators__group'>
        <ul>
          <li>One lowercase character</li>
          <li>One uppercase character</li>
          <li>One number</li>
        </ul>
      </div>
      <div className='form-validators__group'>
      <ul>
          <li>One special character</li>
          <li>8 characters minimum</li>
        </ul>
      </div>
    </div>
  )
}

function Field({label, className, type, ref, onChange}) {
  return (
    <div className={`flex__column ${className}`}>
      <label className='form__label' htmlFor={type}>{label}</label>
      <input type={type} id={type} className='form__input' ref={ref} onChange={onChange}></input>
    </div>
  )
}

function Button({label, disabled, children}) {
  return (
    <div className='flex__row'>
      <button disabled={disabled}>{label}</button>
      <Field type="checkbox"></Field>
      <span className='button__description'>{children}</span>
    </div>
  )
}

function Form(){
    const [isValid, setIsValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [hasLowerCase, setHasLowerCase] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const [isLongEnough, setIsLongEnough] = useState(false);
    const handleChange = (event) =>  {
    if(/.*\d.*/.test(event.target.value)) {
      setHasNumber(true)
    } else {
      setHasNumber(false)
    }
    if(event.target.value.length >= 8) {
      setIsLongEnough(true)
    } else {
      setIsLongEnough(false)
    }
    if(/.*[a-z].*/.test(event.target.value)) {
      setHasLowerCase(true)
    } else {
      setHasLowerCase(false)
    }
    if(/.*[A-Z].*/.test(event.target.value)) {
      setHasUppercase(true)
    } else {
      setHasUppercase(false)
    }
    if(/[^a-zA-Z\d]/.test(event.target.value)) {
      setHasSpecialChar(true)
      console.log(hasSpecialChar)
    } else {
      setHasSpecialChar(false)
      console.log(hasSpecialChar)
    }
    if(hasLowerCase && hasUppercase && hasNumber && hasSpecialChar &&  isLongEnough && isEmailValid) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }
  const handleEmail = (event) => {
    if(/.*\@.*/.test(event.target.value)) {
      setIsEmailValid(true)
      console.log(isEmailValid)
    } else {
      setIsEmailValid(false)
      console.log(isEmailValid)
    }
  }
  return (
    <form>
      {/* Field component */}
      <Field label="Email" type="email" className='form__group' onChange={handleEmail}></Field>

      {/* Field component */}
      <Field label="Username" type="text" className='form__group'></Field>

      {/* Field component */}
      <Field label="Password" type="password" className='form__group' onChange={handleChange}></Field>
      <FormValidators></FormValidators>

      {/* Button component */}
      <Button label="Sign up" disabled={!isValid}>I don't want to receive emails about new Mailchimp products, best practices, or special offers.</Button>
    </form>
  )
}

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
