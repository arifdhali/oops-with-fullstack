import React, { useState } from 'react';
import { GoPasskeyFill } from "react-icons/go";
const Login = () => {

  return (
    <div className="container">
      <div className="login-box">
        <div className="login-title text-center">
          <GoPasskeyFill fill='#a18aff' className='text-primary mb-3' />
        </div>
        <div className="login-form">
          <form>
            <div className="form-group mb-2">
              <label htmlFor="">Username</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
            <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="submit-button mt-4">
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
