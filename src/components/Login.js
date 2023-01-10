import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import "./Login.css"

const Login = () => {

  const url = "http://216.230.74.17:8013/api/Auth/login"
  const [data, setData] = useState({
    username: "",
    password: ""
  })
  const navigation = useNavigate()

  const [isInvalidLogin , setInvalidLogin] = useState(false)

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      username: data.username,
      password: data.password
    })
      .then(res => {
        console.log(res.data)
        setInvalidLogin(false)
        navigation('/home')
      }).catch(er => {
        console.log(er?.response?.status)
        if (er?.response?.status === 401 || er?.response?.status === 500) {
          setInvalidLogin(true)
        }
      })
  }

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    <div className='login'>
      {isInvalidLogin && <span style={{color:'red'}}>Invalid credentials</span>}
      <form className='login__form' onSubmit={(e) => submit(e)}>
        <h1>Login Here </h1>
        <input onChange={(e) => handle(e)} id="username" name="username" value={data.username} placeholder="username" type="text"></input>
        <input onChange={(e) => handle(e)} id="password" name="password" value={data.password} placeholder="password" type="password"></input>
        <button type="submit" className='submit__btn'>submit</button>
      </form>

    </div>
  )
}

export default Login