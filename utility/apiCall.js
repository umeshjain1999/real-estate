import axios from "axios"
const baseApiUrl = 'http://ecom.orbitstack.in/backend'

const GetAPI = async (route, params = {}) => {
  try {
    const apiUrl = `${baseApiUrl}/${route}`
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
    const apiUrl = `${baseApiUrl}/${route}`
    const res = await axios.post(apiUrl, params)
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