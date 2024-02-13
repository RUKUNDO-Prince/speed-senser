import React from 'react'
import { logo } from '../assets'

const Login = () => {
  return (
    <div className='login-container'>
      <img src={logo} alt="logo" />
      <div className='login-layout'>
        <h1>Log in</h1>
        <form action="">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='johndoe@gmail.com' />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='..........' />
        </form>
        <p>forgot password?</p>
        <button>GET IN</button>
      </div>
    </div>
  )
}

export default Login
