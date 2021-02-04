import {useState} from 'react'

function Field({label, className, type, ref, onChange}) {
    const [showPassword, setShowPassword] = useState(false);
  
    const handlePasswordVisibility = ()=>{
      setShowPassword(!showPassword)
    }
    return (
      <div className={`flex__column ${className}`}>
      {type === 'password' ? <div onClick={handlePasswordVisibility} className='form__password__visibility__handler'>OKO</div> : null }
        <label className='form__label' htmlFor={type}>{label}</label>
        <input type={showPassword===true && type === 'password' ? 'text' : type} id={type} className='form__input' ref={ref} onChange={onChange}></input>
      </div>
    )
  }

  export default Field;