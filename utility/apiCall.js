const baseApiUrl = 'https://rickandmortyapi.com/api'

// https://5895-43-243-83-16.ngrok.io/

const GetAPI = async(route) => {
  try {
    const apiUrl = `${baseApiUrl}/${route}`
    
    const options = {
      method: 'GET',
    }
    
    const res = await fetch(apiUrl,options)
    const finalData = await res.json()

    return finalData

  } catch(error)  {
    console.error('route---->',error)
    return false
  }
}
const PostAPI = async(route,bodyData = {}) => {
  try {
    const apiUrl = `${baseApiUrl}/${route}`
    
    const options = {
      method: 'POST',
      body : {
        ...bodyData
      }
    }
    
    const res = await fetch(apiUrl,options)
    const finalData = await res.json()
    
    return finalData

  } catch(error)  {
    console.error('route---->',error)
    return false
  }
}

export {
  GetAPI,
  PostAPI
}