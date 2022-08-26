/* library */
import React from 'react';
import { useSnackbar } from 'notistack';
/* components */
import Button from '@components/Button';
import Input from '@components/Input';
/* utils */
import { isNormalNumber } from '@utility/functions';
import { ERROR_MESSAGE } from '@constants/constant';
function MobileNumber({
  updatePhoneNumber
}) {
  const { enqueueSnackbar } = useSnackbar()
  const [pNumber, setPNumber] = React.useState('')
  const [buttonDisable, setButtonDisable] = React.useState(true)

  const resetState = () => {
    setPNumber('')
    setButtonDisable(true)
  }
  const handleChange = (e) => {
    const ele = e.target
    if (!isNormalNumber(ele.value)) return false
    setPNumber(ele.value)
  }

  React.useEffect(() => {
    if (pNumber.length === 10) {
      setButtonDisable(false)
    } else {
      setButtonDisable(true)
    }
  }, [pNumber])

  const formSubmission = (e) => {
    e.preventDefault()
    if (pNumber) {
      updatePhoneNumber(pNumber)
      resetState();
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }


  return (
    <>
      <div className='login__modal-top'>
        <div className="login__modal-text">Please Enter Mobile Number to Continue</div>
      </div>
      <form onSubmit={formSubmission} className='login__modal-form'>
        <div className='login__modal-input-wrap'>
          <div className='login__modal-prefix'>+91</div>
          <Input
            required
            type="tel"
            name="tel"
            autoFocus
            onChange={handleChange}
            value={pNumber}
          />
        </div>
        <Button text='submit' variant='secondary' type='submit' className='login__modal-button' disabled={buttonDisable} />
      </form>
    </>
  )
}

export default MobileNumber