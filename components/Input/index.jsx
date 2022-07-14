import { forwardRef } from "react";
import { phoneValidationPattern } from '@utility/functions';
const Input = forwardRef((props,ref) => {
  const {
    className = '',
    ...remainingProps
  } = props
  let pattern = ''
  if(props?.type === 'tel') {
    pattern = phoneValidationPattern
  }
  return (
    <input pattern= {pattern} {...remainingProps} className={`common-input ${className}`} ref = {ref}/>
  )
});

export default Input;