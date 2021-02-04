import {useState} from 'react'
import Button from './Button'
import Field from './Field'

function Form(){
    const [isValid, setIsValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [hasLowerCase, setHasLowerCase] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const [hasMinEightChars, sethasMinEightChars] = useState(false);

    function FormValidators() {
      return (        
        <div className='form-validators__wrapper'>
          <div className='form-validators__group'>
            <ul>
              <li className={hasLowerCase ? 'form-validators__criteria__met' : ''}>One lowercase character</li>
              <li className={hasUppercase ? 'form-validators__criteria__met' : ''}>One uppercase character</li>
              <li className={hasNumber ? 'form-validators__criteria__met' : ''}>One number</li>
            </ul>
          </div>
          <div className='form-validators__group'>
          <ul>
              <li className={hasSpecialChar ? 'form-validators__criteria__met' : ''}>One special character</li>
              <li className={hasMinEightChars ? 'form-validators__criteria__met' : ''}>8 characters minimum</li>
            </ul>
          </div>
        </div>
        
      )
    }

    function CorrectPasswordFeedback() {
      return (
      <div className='form-validators__feedback__success'>
        Your password is secure and you're all set!
        </div>
      )
    }

    const handleChange = (event) =>  {
    if(/.*\d.*/.test(event.target.value)) {
      setHasNumber(true)
    } else {
      setHasNumber(false)
    }
    if(event.target.value.length >= 8) {
      sethasMinEightChars(true)
    } else {
      sethasMinEightChars(false)
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
    } else {
      setHasSpecialChar(false)
    }
    if(hasLowerCase && hasUppercase && hasNumber && hasSpecialChar &&  hasMinEightChars) {
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
      {isValid ? <CorrectPasswordFeedback/> : <FormValidators/> }

      {/* Button component */}
      <Button label="Sign up" disabled={!isValid}>I don't want to receive emails about new Mailchimp products, best practices, or special offers.</Button>
    </form>
  )
}

export default Form;