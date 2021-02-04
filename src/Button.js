import Field from './Field'

function Button({label, disabled, children}) {
    return (
      <div className='flex__row margin__top__24 margin__bottom__24'>
        <button disabled={disabled} className='button__signup'>{label}</button>
        <div className='flex__row center__vertical'>
          <Field type="checkbox"></Field>
          <span className='button__description'>{children}</span>
        </div>
      </div>
    )
  }

  export default Button;