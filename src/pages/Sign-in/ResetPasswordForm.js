import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useState, useRef } from "react";

import { Link } from "react-router-dom";

const ResetPasswordForm = ({ setStep, loading, newPassword, setNewPassword, handleResetPassword, handleShowPopper = null }) => {
  const [resetPassword, setResetPassword] = useState(false);
  const [confirmPassword, confirmShowPassword] = useState(false);

  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const resetPasswordVisibility = () => {
    setResetPassword((prev) => !prev);
  };

  const confirmPasswordVisibility = () => {
    confirmShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== confirmPasswordValue) {
      setErrorMessage("Passwords do not match");
      return; // Stop the submission
    }

    setErrorMessage(""); // Clear error message if passwords match

    handleResetPassword()

    // handleShowPopper(); // Call the function to show the popper or handle submission logic
  };

  return (
    <div className="signin-right-div-col">
      <div onClick={() => setStep("otp")} className="forgotPass-back cursor-pointer">
        {" "}
        <ArrowBackIosIcon style={{ verticalAlign: "middle" }} /> Back
      </div>

      <form className="signin-form" onSubmit={handleSubmit}>
        <h1 className="forgotPass-heading">Reset Password</h1>
        <p className="forgotPass-para">Reset your new password</p>

        <label className="inputfield-headings">New Password</label>
        <div className="inputfield-resetPassword-div">
          <input
            type={resetPassword ? "text" : "password"}
            placeholder="Enter New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className=""
          />
          <a href="#" onClick={resetPasswordVisibility}>
            {resetPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </a>
        </div>

        <label className="inputfield-headings">Confirm Password</label>
        <div className="inputfield-resetPassword-div">
          <input
            type={confirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPasswordValue}
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            className=""
          />
          <a href="#" onClick={confirmPasswordVisibility}>
            {confirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </a>
        </div>

        {errorMessage && (
          <p className="error-message" style={{ color: "red" }}>
            {errorMessage}
          </p>
        )}

        <button disabled={loading} className="Signin-btn cursor-pointer">
          <span>{loading ? "Verifying..." : "Verify"}</span>
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
