/* library */
import React from 'react'
import { useSnackbar } from 'notistack';
/* components */
import CustomModal from "@components/Modal";
import Card from "@components/Card";
import EnterOTP from './EnterOTP';
import MobileNumber from './MobileNumber';
/* helpers */
import { sendOTP } from '@helpers/requestCallback';
/* constants */
import { API_SUCCESS_CODE, ERROR_MESSAGE } from '@constants/constant';

function RequestCallBack({ open, onClose }) {
  const { enqueueSnackbar } = useSnackbar()
  const initialTitle = mobileNumberTitle;
  const [title, setTitle] = React.useState(initialTitle);
  const [OTP, setOTP] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    if (OTP) {
      setTitle(otpTitle);
    } else {
      setTitle(initialTitle);
    }
  }, [OTP]);

  const handleOTP = () => {
    setOTP(!OTP);
  };
  const updatePhoneNumber = async (pN) => {
    const res = await sendOTP({
      mobile: pN,
    })
    if (res?.statusCode === API_SUCCESS_CODE) {
      enqueueSnackbar('OTP Sent. Please check entered mobile number', { variant: 'success' })
      setPhoneNumber(pN);
      handleOTP()
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  };
  const resetAllState = () => {
    setOTP(false);
    onClose();
  };
  return (
    <CustomModal open={open} onClose={resetAllState} type={OTP ? "OTP" : ""}>
      <Card title={title} className="login__modal center">
        {!OTP && (
          <MobileNumber
            updatePhoneNumber={updatePhoneNumber}
          />
        )}
        {OTP && (
          <EnterOTP
            phoneNumber={phoneNumber}
            handleOTP={handleOTP}
            closeModal={resetAllState}
          />
        )}
      </Card>
    </CustomModal>
  )
}

const mobileNumberTitle = "Request a callback";
const otpTitle = "Confirm OTP to continue";

export default RequestCallBack