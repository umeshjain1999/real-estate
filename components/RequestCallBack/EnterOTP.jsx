/* library */
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack';
/* components */
import Input from '@components/Input'
import Button from '@components/Button'
/* utils */
import { isNormalNumber } from '@utility/functions'
/* helpers */
import { verifyOTP, sendOTP } from '@helpers/requestCallback'
/* constants */
import { API_SUCCESS_CODE, ERROR_MESSAGE } from '@constants/constant';

function EnterOTP({
  phoneNumber,
  handleOTP,
  closeModal
}) {
  const { enqueueSnackbar } = useSnackbar()

  const [otp, setOtp] = useState(new Array(4).fill(""))
  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    if (!otp.includes("")) {
      setButtonDisable(false)
    } else {
      setButtonDisable(true)
    }
  }, [otp])

  const changePhoneNumber = () => {
    handleOTP()
  }

  const resendOTP = async () => {
    setOtp([...otp.map(() => "")])
    const res = await sendOTP({
      mobile: phoneNumber
    })
    if (res?.statusCode === API_SUCCESS_CODE) {
      enqueueSnackbar('OTP successfully resent', { variant: 'success' })
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }

  const handleChange = (element, index) => {

    if (!isNormalNumber(element.value)) return false

    setOtp([...otp.map((d, idx) => idx === index ? element.value : d)])

    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const formSubmission = async (e) => {
    e.preventDefault()
    const finalOTP = otp.join("")
    const res = await verifyOTP({
      mobile: phoneNumber,
      otp: finalOTP,
    })
    if (res?.statusCode === API_SUCCESS_CODE) {
      enqueueSnackbar('Successfully Verified', { variant: 'success' })
      enqueueSnackbar('You will receive a call very soon.', { variant: 'success' })
      closeModal();
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }

  return (
    <div className='otp__modal'>
      <div className="otp__modal-top">
        <div className='otp__modal-text-wrap'>Please enter OTP sent to <span className='otp__modal-number'>+91-{phoneNumber}</span></div>
        <div className='otp__modal-highlight login__modal-highlight' onClick={changePhoneNumber}>Change</div>
      </div>
      <form onSubmit={formSubmission} className="otp__modal-form">
        <div className="otp__modal-input-wrap">
          {otp && otp.map((data, index) => {
            return (
              <Input
                className="otp__modal-input"
                type="text"
                name="otp"
                maxLength="1"
                placeholder="X"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            )
          })}
        </div>
        <Button className='login__modal-button otp__modal-button' disabled={buttonDisable} text='submit' variant='secondary' type='submit' />
      </form>
      <div className="otp__modal-bottom">
        Not received your OTP ?
        <span className='otp__modal-highlight login__modal-highlight' onClick={resendOTP}>Resend OTP</span>
      </div>
    </div>
  )
}

export default EnterOTP