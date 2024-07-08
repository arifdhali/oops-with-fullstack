import React, { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";

import axios from "axios";
const register = () => {
  const [error, setError] = useState();
  const [input, setInput] = useState({
    name: "",
    email: "",
    profile_img: null,
    password: ""
  })
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // get the obj url of image to view the uploaded images
    if (input.profile_img) {
      const objUrl = URL.createObjectURL(input.profile_img);
      setPreviewImage(objUrl);
    }
  }, [input.profile_img]);


  const handelInput = (e) => {
    const { name, value, files } = e.target;

    if (name === "profile_img") {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: files[0]

      }))
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value
      }))
    }
  }
  axios.defaults.withCredentials = true;

  const handelFormSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    for (let i in input) {
      formData.append(i, input[i]);
    }

    axios.post("http://localhost:4000/user/register", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(response => {
      setError(response.data)
    }).catch(error => {
      console.error('Error registering user:', error);
    });
  }



  return (
    <div className="container">
      <div className="login-box">
        <div className="login-title text-center">
          <FaUserAlt fill='#a18aff' className='text-primary mb-3' />
          <h2 className='text-warning'>Registration form</h2>
        </div>
        <div className="login-form">
          <form onSubmit={handelFormSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="">Name</label>
              <input name='name' onChange={handelInput} type="text" className="form-control py-2" />
              {error?.message &&
                <small className='error'>{error.message}</small>
              }
            </div>
            <div className="form-group mb-2">
              <label htmlFor="">Email</label>
              <input name='email' onChange={handelInput} type="email" className="form-control py-2" />
              {error?.message &&
                <small className='error'>{error.message}</small>
              }
            </div>
            <div className='form-group mb-2'>
              <label htmlFor="">Profile image</label>
              <div className="input-group ">
                <input name='profile_img' onChange={handelInput} type="file" className="form-control py-2" id="inputGroupFile02" />
                <label className="input-group-text" htmlFor="inputGroupFile02">{previewImage ? "Re-upload" : "Upload"}</label>
              </div>
              <div>
                {error?.message &&
                  <small className='error'>{error.message}</small>
                }
              </div>
              {
                previewImage && (
                  <div className="preview my-3 text-center">
                    <img src={previewImage} alt="Preview-profile" />
                  </div>
                )
              }

            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input name='password' onChange={handelInput} type="password" className="form-control py-2" />
              {error?.message &&
                <small className='error'>{error.message}</small>
              }
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