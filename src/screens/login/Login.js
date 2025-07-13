import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login_service_auth } from '../../services/authService';
import { asyncStatus } from '../../utils/asyncstatus';
import { setIdleStatus } from '../../store/authSlice';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { login_status } = useSelector((state => state.userAuth))

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const submitHandle = () => {
    dispatch(login_service_auth(formData))
    console.log("formData", formData);

  }

  console.log("login_status", login_status);

  useEffect(() => {
    if (login_status === asyncStatus.SUCCEEDED) {
      navigate("/")
      dispatch(setIdleStatus())
    }
  }, [login_status])




  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Apne account mein login karein</p>
        </div>

        <div className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your password"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <button type="button" className="forgot-password">Forgot Password?</button>
          </div>

          <button
            onClick={submitHandle}
            type="button"
            className="login-button"

          >
            {login_status === asyncStatus.LOADING ? "Loding..." : "Login"}
          </button>
        </div>

        <div className="signup-link">
          <p>Account nahi hai? <button type="button" className="signup-btn"><Link to="/signup">Sign up karein</Link></button></p>
        </div>
      </div>
    </div>
  );
};

export default Login;