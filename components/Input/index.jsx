import { forwardRef } from "react";
import { phoneValidationPattern } from '@utility/functions';
const Input = forwardRef((props,ref) => {
  const {
    className = '',
    ...remainingProps
  } = props
  let pattern = '.*'
  let title = ''
  if(props?.type === 'tel') {
    pattern = phoneValidationPattern
    title = "Phone number must be 10 digit"
  }
  return (
    <input pattern= {pattern} title = {title} {...remainingProps} className={`common-input ${className}`} ref = {ref}/>
  )
});

export default Input;