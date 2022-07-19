import { useEffect, useState } from 'react'
import Input from '@components/Input'
import Button from '@components/Button'
import { isNormalNumber } from '@utility/functions'
function OTPForm({
  phoneNumber,
  handleOTP,
  closeModal
}) {
  const [otp,setOtp] = useState(new Array(4).fill(""))
  const [buttonDisable,setButtonDisable] = useState(true)

  const changePhoneNumber = () => {
    handleOTP()
  }

  const resendOTP = () => {
    alert("OTP resend operations")
    setOtp([...otp.map((a) => "")])
  }

  const handleChange = (element,index) => {
    
    if(!isNormalNumber(element.value)) return false
    
    setOtp([...otp.map((d,idx) => idx === index ? element.value : d )])

    if(element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const formSubmission = (e) => {
    e.preventDefault()
    alert(`Successfully Verified! with ${otp.join("")} OTP`)
    closeModal();
  }

  useEffect(() => {
    if(!otp.includes("")){
      setButtonDisable(false)
    }else{
      setButtonDisable(true)
    }
  },[otp])

  return (
    <div className='otp__modal'>
      <div className="otp__modal-top">
        <div className='otp__modal-text-wrap'>Please enter OTP sent to <span className='otp__modal-number'>+91-{phoneNumber}</span></div>
        <div className='otp__modal-highlight login__modal-highlight' onClick={changePhoneNumber}>Change</div>
      </div>
      <form onSubmit={formSubmission  } className = "otp__modal-form">
        <div className="otp__modal-input-wrap">
          {otp && otp.map((data,index) => {
            return(
              <Input
                className = "otp__modal-input"
                type = "text"
                name = "otp"
                maxLength = "1"
                placeholder = "X"
                key = {index}
                value = {data}
                onChange = {(e) => handleChange(e.target,index)}
                onFocus = {(e) => e.target.select() }
              />
            )
          })}
        </div>
        <Button className = 'login__modal-button otp__modal-button' disabled = {buttonDisable} text='submit' variant='secondary' type='submit'/>
      </form>
      <div className="otp__modal-bottom">
        Not received your OTP ?
        <span className='otp__modal-highlight login__modal-highlight' onClick={resendOTP}>Resend OTP</span>
      </div>
    </div>
  )
}

export default OTPForm