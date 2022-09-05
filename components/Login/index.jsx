/* library */
import { useSnackbar } from 'notistack';
import React, { useState } from "react";
/* components */
import Card from "@components/Card";
import CustomModal from "@components/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
/* helpers */
import { login, register } from "@helpers/authentication";
/* constant */
import { API_SUCCESS_CODE, ERROR_MESSAGE } from '@constants/constant';

function Login({ open, onClose }) {
  const { enqueueSnackbar } = useSnackbar()
  const [title, setTitle] = useState(loginTitle);
  const [type, setType] = useState("LOGIN");
  const [OTP, setOTP] = useState(false)

  React.useEffect(() => {
    if (type === "REGISTER") {
      setTitle(registerTitle);
    } else if (OTP) {
      setTitle(otpTitle);
    } else {
      setTitle(loginTitle);
    }
  }, [type, OTP]);

  const handleType = (whichScreen) => {
    setType(whichScreen)
  }

  const resetAllState = () => {
    setType("LOGIN")
    onClose();
  };

  const authAPI = async (type, query) => {
    switch (type) {
      case "LOGIN":
        const loginResponse = await login({ query: query })
        if (loginResponse?.statusCode === API_SUCCESS_CODE) {
          enqueueSnackbar("You're Successfully Logged In!", { variant: 'success' })
          return true
        } else {
          enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
          return false
        }
      case "REGISTER":
        const registerResponse = await register({ query: query })
        if (registerResponse?.statusCode === API_SUCCESS_CODE) {
          enqueueSnackbar("You're Successfully Registered!", { variant: 'success' })
          return true
        } else {
          enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
          return false
        }
      default:
        return false
    }
  }

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
        {type === "LOGIN" && (
          <LoginForm
            handleType={handleType}
            closeModal={resetAllState}
            authAPI={authAPI}
            OTPState={OTP}
            updateOTPState={updateOTPState}
          />
        )}
        {type === "REGISTER" && (
          <RegisterForm
            handleType={handleType}
            closeModal={resetAllState}
            authAPI={authAPI}
            OTPState={OTP}
            updateOTPState={updateOTPState}
          />
        )}
      </Card>
    </CustomModal>
  );
}

const loginTitle = "Sign in to continue";
const otpTitle = "Confirm OTP to continue";
const registerTitle = "Register";

export default Login;
