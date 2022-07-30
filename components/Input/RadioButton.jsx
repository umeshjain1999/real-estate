import React from 'react'
import Input from '@components/Input'

function RadioButton(props) {
  const {containerClassName ='',labelClassName="",id='',label,...remainingProps} = props
  return (
    <div className={containerClassName}>
      <Input type='radio' id={id} {...remainingProps} />
      {label && <label htmlFor={id} className={labelClassName}>{label}</label>}
    </div>
  )
}

export default RadioButton