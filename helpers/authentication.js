import { GetAPI, PostAPI } from "helpers";

export const register = async ({ query = {} }) => {
  /*
?expected structure
query = {
  type:'',
  name:'',
  email: '',
  phone:''
}
*/
  try {
    const res = await PostAPI('store/signup', query)
    return res
  } catch (error) {
    return false
  }
}

export const login = async ({ query = {} }) => {
  try {
    const res = await PostAPI('store/login', query)
    return res
  } catch (error) {
    return false
  }
}