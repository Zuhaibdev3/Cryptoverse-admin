

import { LoginSmallLogo } from "../../images";

import Checkbox from "@mui/material/Checkbox";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useAuth()
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(credentials)
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="signin-right-div-col">
      <img src={LoginSmallLogo} alt="" className="signin-right-div-img" />
      <h1 className="signin-heading">Sign in</h1>

      <form className="signin-form" onSubmit={onSubmit}>
        <label className="inputfield-headings">Email Address</label>
        <input
          type="email"
          placeholder="john@example.com"
          className="inputfield-email"
          required
          name="email"
          onChange={onChange}
        />

        <label className="inputfield-headings">Password</label>
        <div className="inputfield-password-div">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className=""
            required
            name="password"
            onChange={onChange}
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </div>

        <div className="forgot-pass-row">
          <div className="remember-me-div">
            <Checkbox {...label} />
            <p>Remember me</p>
          </div>

          <Link to="/forgot-password" className="forgotpass-para">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="Signin-btn cursor-pointer">
          <span>{loading === "pending" ? "Signing..." : "Sign in"}</span>
        </button>
      </form>
    </div>
  );
};

export default SignInForm;

