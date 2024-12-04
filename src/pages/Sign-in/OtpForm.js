import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useState, useRef } from "react";

import { Link } from "react-router-dom";

const OtpForm = ({ setStep, loading, email, handleVerifyOtp, otpValues, setOtpValues }) => {
  const inputRefs = useRef([]);


  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      // Only allow numeric input
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Move focus to next input if value is entered
      if (index < 4 && value) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      e.target.value = ""; // Clear invalid input
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      const newOtpValues = [...otpValues];

      // Clear current input and move to the previous input if it's empty
      if (!otpValues[index] && index > 0) {
        inputRefs.current[index - 1].focus();
        newOtpValues[index - 1] = "";
      } else {
        newOtpValues[index] = ""; // Clear current input
      }
      setOtpValues(newOtpValues);
    }
  };

  const getBorderStyle = (value) => {
    return value ? "1px solid #ff2957" : "1px solid rgba(162, 161, 168, 0.2)"; // Border based on value
  };

  console.log(otpValues, "otpValues")

  return (
    <div className="signin-right-div-col">
      <div onClick={() => setStep("forgot")} className="forgotPass-back cursor-pointer">
        {" "}
        <ArrowBackIosIcon style={{ verticalAlign: "middle" }} /> Back
      </div>

      <div className="signin-form">
        <h1 className="forgotPass-heading">Enter OTP</h1>
        <p className="forgotPass-para">
          We have share a code to your registered Email
          <br />
          <span>{email}</span>
        </p>

        <div className="otp-input-row">
          {otpValues.map((value, index) => (
            <input
              key={index}
              type="text"
              className="Otp-input-code"
              maxLength="1"
              value={value}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              style={{
                border: getBorderStyle(value),
              }}
            />
          ))}
        </div>

        <div onClick={handleVerifyOtp} className="Signin-btn cursor-pointer" style={{ textAlign: 'center', pointerEvents: loading ? "none" : "auto" }}>
          <span>{loading ? "Verifying..." : "Verify"}</span>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
