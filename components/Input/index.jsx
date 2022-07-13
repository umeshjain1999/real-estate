import React from 'react'

function Input(props) {
  const {
    inputClassName = '',
    ...remainingProps
  } = props
  return (
    <>
      <input {...remainingProps} className={`common-input ${inputClassName}`}/>
    </>
  )
}

export default Input