import axios from "axios";
import React, { useState } from "react";
import { GoPasskeyFill } from "react-icons/go";
import { Link } from "react-router-dom";
const Login = () => {
  const [response, setResponse] = useState();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handelInput = (e) => {
    const { value, name } = e.target;

    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${process.env.BASE_URL}/auth/login`,
      input
    );
    setResponse(response.data.login_data);
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="login-title text-center">
          <GoPasskeyFill fill="#a18aff" className="text-primary mb-3" />
          <h2 className="text-warning">Login form</h2>
        </div>
        <div className="login-form">

          <form onSubmit={handelSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="">Email</label>
              <input
                onChange={handelInput}
                type="text"
                name="email"
                className="form-control py-2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                onChange={handelInput}
                type="password"
                name="password"
                className="form-control py-2"
              />
            </div>
            <small className="error"> {response && response.message}</small>

            <div className="form-group">
              <p>
                Don't have accont? <Link to={"/register"}>Register</Link>
              </p>
            </div>
            <div className="submit-button mt-4">
              <button type="submit" className="btn btn-primary w-100 py-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
