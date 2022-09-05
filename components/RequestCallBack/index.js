/* library */
import { useEffect, useState } from 'react';
/* components */
import Card from "@components/Card";
import CustomModal from "@components/Modal";
import MobileNumber from './MobileNumber';

function RequestCallBack({ open, onClose, projectDetail }) {
  const [title, setTitle] = useState(mobileNumberTitle);
  const [OTP, setOTP] = useState(false);

  useEffect(() => {
    if (OTP) {
      setTitle(otpTitle);
    } else {
      setTitle(mobileNumberTitle);
    }
  }, [OTP]);

  const resetAllState = () => {
    setOTP(false);
    onClose();
  };

  const updateOTPState = (bool) => {
    if (typeof bool !== undefined) {
      setOTP(bool)
    } else {
      setOTP(prev => !prev)
    }
  }


  return (
    <CustomModal open={open} onClose={resetAllState} backdropClick={OTP}>
      <Card title={title} className="login__modal center">
        <MobileNumber
          OTPState={OTP}
          updateOTPState={updateOTPState}
          projectDetail={projectDetail}
          closeModal={resetAllState}
        />
      </Card>
    </CustomModal>
  )
}

const mobileNumberTitle = "Request a callback";
const otpTitle = "Confirm OTP to continue";

export default RequestCallBack