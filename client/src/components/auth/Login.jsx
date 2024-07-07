import React, { useState } from 'react';
import { GoPasskeyFill } from "react-icons/go";
import { Link } from 'react-router-dom';
const Login = () => {

  return (
    <div className="container">
      <div className="login-box">
        <div className="login-title text-center">
          <GoPasskeyFill fill='#a18aff' className='text-primary mb-3' />
          <h2 className='text-warning'>Login form</h2>

        </div>
        <div className="login-form">
          <form>
            <div className="form-group mb-2">
              <label htmlFor="">Username</label>
              <input type="text" className="form-control py-2" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control py-2" />
            </div>
            <div className="form-group">
              <p>Don't have accont? <Link to={'/register'}>Register</Link></p>
            </div>
            <div className="submit-button mt-4">
              <button type="submit" className="btn btn-primary w-100 py-2">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
