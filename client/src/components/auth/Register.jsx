import React, { useEffect, useState } from 'react';
import { FaUserAlt, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const redirect = useNavigate();
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: '',
    email: '',
    profile_img: '',
    password: '',
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (input.profile_img) {
      const objUrl = URL.createObjectURL(input.profile_img);
      setPreviewImage(objUrl);
      return () => URL.revokeObjectURL(objUrl);
    } else {
      setPreviewImage('');
    }
  }, [input.profile_img]);

  const handleInput = (e) => {
    const { name, value, files } = e.target;

    if (name === 'profile_img') {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: files[0],
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  const nameValidation = (name) => {
    const nameRegex = /^[a-zA-Z\s'-]{2,40}$/;
    let msg = '';
    if (!name.trim()) {
      return msg = 'Name is required';
    } else if (!nameRegex.test(name)) {
      return msg = 'Name should not include special characters';
    }
    return msg;
  };

  const emailValidation = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let msg = '';
    if (!email.trim()) {
      return msg = 'Email is required';
    } else if (!emailRegex.test(email)) {
      return msg = 'Email is not valid';
    }
    return msg;
  };

  const passwordValidation = (pass) => {
    let msg = '';
    const passLeng = 6;
    const passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!pass.trim()) {
      return msg = "Password is required";
    } else if (pass.length < passLeng) {
      return msg = `Password should be at least ${passLeng} characters long`;
    } else if (!passRegx.test(pass)) {
      return msg = "Password should contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@, $, !, %, *, ?, &)";
    }
    return msg;
  };

  const validation = () => {
    return true;
    const errors = {};
    errors.name = nameValidation(input.name);
    errors.email = emailValidation(input.email);
    errors.password = passwordValidation(input.password);
    setError(errors);
    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validation();
    if (Object.values(errors).some((err) => err)) {
      return;
    } else {
      const formData = new FormData();
      for (let key in input) {
        formData.append(key, input[key]);
      }

      try {
        const response = await axios.post(`${process.env.BASE_URL}/user/register`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status === 200) {
          redirect("/login");
        } else {
          setError(response.data);
        }
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="login-title text-center">
          <FaUserAlt fill="#a18aff" className="text-primary mb-3" />
        </div>
        <div className="login-form">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                onChange={handleInput}
                value={input.name}
                type="text"
                className="form-control py-2"
              />
              {error.name && <small className="error">{error.name}</small>}
            </div>
            <div className="form-group mb-2">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                onChange={handleInput}
                value={input.email}
                type="text"
                className="form-control py-2"
              />
              {error.email && <small className="error">{error.email}</small>}
            </div>
            <div className="form-group mb-2">
              <label htmlFor="profile_img">Profile image</label>
              <div className="input-group">
                <input
                  name="profile_img"
                  onChange={handleInput}
                  type="file"
                  className="form-control py-2"
                  id="inputGroupFile02"
                />
                <label className="input-group-text" htmlFor="inputGroupFile02">
                  {previewImage ? 'Re-upload' : 'Upload'}
                </label>
              </div>
              {error.profile_img && <small className="error">{error.profile_img}</small>}
              {previewImage && (
                <div className="preview my-3 text-center">
                  <img src={previewImage} alt="Preview-profile" style={{ maxWidth: '100%' }} />
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className='position-relative'>
                <input
                  name="password"
                  onChange={handleInput}
                  value={input.password}
                  type={showPass ? "text" : "password"}
                  className="form-control py-2"
                />
                <div className='password-show position-absolute top-50 end-0 translate-middle' onClick={() => setShowPass((prev) => !prev)} >
                  {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
              {error.password && <small className="error">{error.password}</small>}
            </div>
            <div className="submit-button mt-4">
              <button type="submit" className="btn btn-primary w-100 py-2">
                Register
              </button>
            </div>
            {error.successMessage && (
              <div>
                <p className='mb-0 mt-2 text-success'>{error.successMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
