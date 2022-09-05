import { PostAPI } from "helpers"

export const sendOTP = async (query = {}) => {
  /*
  ?expected structure
  query = {
    mobile: '',
  }
  */
  try {
    const res = await PostAPI('store/sendOTP', query)
    return res
  } catch (error) {
    console.error('Encountered error', error);
    return false
  }
}

export const verifyOTP = async (query = {}) => {
  /*
  ?expected structure
  query = {
    mobile: '',
    otp:'',
  }
  */
  try {
    const res = await PostAPI('store/verifyOTP', query)
    return res
  } catch (error) {
    console.error('Encountered error', error);
    return false
  }
}

export const getCallback = async (query = {}) => {
  /*
  ?expected structure
  query = {
  "name":"string",
  "email":"string",
  "phone":"string",
  "propertyDescription":"string"
  }
  */
  try {
    const res = await PostAPI('store/getCallBack', query)
    return res
  } catch (error) {
    console.error('Encountered error', error);
    return false
  }
}

export const contactRealEstate = async (query = {}) => {
  /*
  ?expected structure
  query = {
  "name":"string",
  "email":"string",
  "phone":"string",
  "propertyDescription":"string"
  }
  */
  try {
    const res = await PostAPI('store/contactUs', query)
    return res
  } catch (error) {
    console.error('Encountered error', error);
    return false
  }
}

export const becomePartner = async (query = {}) => {
  /*
  ?expected structure
  query = {
  "name":"string",
  "email":"string",
  "phone":"string",
  "propertyDescription":"string"
  }
  */
  try {
    const res = await PostAPI('store/becomePartner', query)
    return res
  } catch (error) {
    console.error('Encountered error', error);
    return false
  }
}
