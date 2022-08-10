import {useState} from 'react'
export const useToggle = (initialState = false) => {
  const [toggle,setToggle] = useState(initialState)
  const updateToggle = () => {
    setToggle(prev => !prev)
  }

  return {toggle,updateToggle}
}