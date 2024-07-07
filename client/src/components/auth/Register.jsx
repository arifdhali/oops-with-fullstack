import React from 'react'
import { FaUserAlt } from "react-icons/fa";

const register = () => {
  return (
    <div className="container">
      <div className="login-box">
        <div className="login-title text-center">
          <FaUserAlt fill='#a18aff' className='text-primary mb-3' />
          <h2 className='text-warning'>Registration form</h2>
        </div>
        <div className="login-form">
          <form>
            <div className="form-group mb-2">
              <label htmlFor="">Name</label>
              <input type="text" className="form-control py-2" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control py-2" />
            </div>
      
            <div class="input-group mb-2">
              <input type="file" class="form-control py-2" id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>
            </div>

            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control py-2" />
            </div>
            <div className="submit-button mt-4">
              <button type="submit" className="btn btn-primary w-100 py-2">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default register