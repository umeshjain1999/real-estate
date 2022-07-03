import React from 'react'

function Input(props) {
  const {
    inputClassName = '',
    ...remainingProps
  } = props
  return (
    <>
      <input className={`common-input ${inputClassName}`} {...remainingProps}/>
    </>
  )
}

export default Input