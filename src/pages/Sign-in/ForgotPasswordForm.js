
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useState } from "react";
import { Link } from "react-router-dom";
import OtpForm from "./OtpForm";
import ResetPasswordForm from "./ResetPasswordForm";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

const ForgotPasswordForm = () => {

  const { forgotPass, verifyOtp, reset, setShowPopper } = useAuth()
  const [step, setStep] = useState("forgot")
  const [email, setEmail] = useState("")
  const [otpValues, setOtpValues] = useState(new Array(5).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const handleForgotPassword = async () => {
    setLoading(true)
    try {

      let { data } = await forgotPass({ email })

      if (data.statusCode === "10000") {
        setStep("otp")
        setEmail(data.message)
        setLoading(false)
      }

    } catch (error) {
      console.log(error, "errrrrr")
      setLoading(false)
      toast.error(error.response.data.message)
    }
  }

  const handleVerifyOtp = async () => {
    setLoading(true)
    try {

      let { data } = await verifyOtp({ email, otp: otpValues.join('') })

      if (data.statusCode === "10000") {
        setStep("reset")
        setLoading(false)
        toast.success(data.message || "Success")
      }

    } catch (error) {
      console.log(error, "errrrrr")
      setLoading(false)
      toast.error(error.response.data.message)
    }
  }

  const handleResetPassword = async () => {
    setLoading(true)
    try {

      let { data } = await reset({ email, newPassword })

      if (data.statusCode === "10000") {
        setStep("forgot")
        setEmail("")
        setOtpValues(new Array(5).fill(""))
        setNewPassword("")
        setShowPopper(true)
        setLoading(false)
        toast.success(data.message || "Success")
      }

    } catch (error) {
      console.log(error, "errrrrr")
      setLoading(false)
      toast.error(error.response.data.message)
    }
  }

  switch (step) {
    case "forgot":
      return <div className="signin-right-div-col">

        <Link to="/signin" className="forgotPass-back">
          {" "}
          <ArrowBackIosIcon style={{ verticalAlign: "middle" }} /> Back
        </Link>

        <div className="signin-form" >
          <h1 className="forgotPass-heading">Forgot Password?</h1>
          <p className="forgotPass-para">
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </p>

          <input
            type="email"
            placeholder="Email*"
            className="inputfield-forgotPass"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div onClick={handleForgotPassword} className="Signin-btn cursor-pointer" style={{ textAlign: 'center' }}>
            <span>{loading ? "Sending OTP..." : "Send OTP"} </span>
          </div>
        </div>

      </div>
    case "otp":
      return <OtpForm loading={loading} setStep={setStep} email={email} handleVerifyOtp={handleVerifyOtp} otpValues={otpValues} setOtpValues={setOtpValues} />
    case "reset":
      return <ResetPasswordForm loading={loading} setStep={setStep} handleResetPassword={handleResetPassword} newPassword={newPassword} setNewPassword={setNewPassword} />
    default:
      break;
  }
};


export default ForgotPasswordForm;