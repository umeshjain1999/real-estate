import axios from "axios"
const { REACT_APP_API_ROUTE } = process.env
const GetAPI = async (route, params = {}) => {
  try {
    const apiUrl = `${REACT_APP_API_ROUTE}/${route}`
    const res = await axios.get(apiUrl, {
      params: {
        ...params
      }
    })
    const finalData = res?.data
    return finalData

  } catch (error) {
    console.error('route---->', error)
    return false
  }
}
const PostAPI = async (route, params = {}) => {
  try {
    const apiUrl = `${REACT_APP_API_ROUTE}/${route}`
    const res = await axios.post(apiUrl, {
      ...params
    })
    const finalData = res?.data
    return finalData

  } catch (error) {
    console.error('route---->', error)
    return false
  }
}

export {
  GetAPI,
  PostAPI
}