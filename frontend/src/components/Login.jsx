import React from 'react'

const Login = () => {
  return (
    <>
      <div className="login-container">
        <h1>LOGIN/SIGN-UP</h1>
        <div className="login">
            <h2>LOGIN</h2>
            <input name='username'  />
            <div className="labels">Username</div>
        </div>
        <div className="vr"></div>
        <div className="register">
            <h2>SIGN-UP</h2>
        </div>
      </div>
    </>
  )
}

export default Login