import { forwardRef } from "react";
const Input = forwardRef((props,ref) => {
  const {
    className = '',
    ...remainingProps
  } = props

  return (
    <input {...remainingProps} className={`common-input ${className}`} ref = {ref}/>
  )
});

export default Input;