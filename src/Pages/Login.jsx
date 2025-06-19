import React, { useState } from 'react'
import './styles/Login.css';
import Google_icon from '../Components/Assets/Frontend_Assets/google.png';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  }


  return (
    <div className='login'>
      <div className="login-container">
        <h1>{isLogin ? 'Login' : 'SignUp'}</h1>
        {!isLogin && <input type="text" placeholder="Enter you'r name" />}
        <input type="email" placeholder="Enter email address" required title='Email Should not be empty' />
        <input type="password" placeholder='password' minLength={4} required title='Should be of lenth >4' />
        {isLogin && <p className='forgot-password' >forgot password?</p>}
        <button className='login-btn'>
          <p>{isLogin ? 'Login' : 'SignUp'}</p>
        </button>
        <div className="separator">
          <hr />
          <span>Signup/Login with Google</span>
          <hr />
        </div>
        <div className="google">
          <img src={Google_icon} alt="" />
          <p>Continue with google</p>
        </div>

        <div className='login-toggle'>
          <p>{isLogin ? "Don't have an Account?" : "Already have an account?"}</p>
          <span onClick={toggleForm} >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </div>

        <em>By clicking the login/signup
          you have accepted for the terms and condition </em>
      </div>

    </div>
  )
}

export default Login