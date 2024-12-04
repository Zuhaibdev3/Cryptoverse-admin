
import "./signin.css";

import { useLocation } from "react-router-dom";
import SignInForm from "./SignInForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ResetPasswordForm from "./ResetPasswordForm";
import OtpForm from "./OtpForm";


import { LoginBg, passwordUpdatedImg } from "../../images";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

// Layout component that receives a component as a prop, defaults is SignIn

const LayoutWrapper = ({ Component = SignInForm }) => {
  const navigate = useNavigate();
  const { showPopper, setShowPopper } = useAuth()

  const handleBackToLogin = () => {
    setShowPopper(false);
    navigate("/signin");
  };

  return (
    <section className="signin-bg">
      {showPopper && (
        <div className="passUpdated">
          <div>
            <img src={passwordUpdatedImg} alt="Password Updated" />
            <h3>Password Update</h3>
            <h3>Successfully</h3>
            <p>Your password has been updated <br /> successfully.</p>
            <button to="/" className="updated-btn cursor-pointer" onClick={handleBackToLogin}>
              <span>Back to login</span>
            </button>
          </div>
        </div>
      )}

      <div className="signin-row">
        <img src={LoginBg} alt="" className="signin-left-div-img" />

        <div className="signin-right-div">
          <Component />
        </div>
      </div>
    </section>
  );
};

// Component to determine which component to pass based on route
const DynamicComponentRouter = () => {
  const location = useLocation();

  const renderComponentByRoute = () => {
    switch (location.pathname) {
      case "/signin":
        return SignInForm;
      case "/forgot-password":
        return ForgotPasswordForm;
      case "/otp-verification":
        return OtpForm;
      case "/reset-password":
        return ResetPasswordForm;
      default:
        return SignInForm;
    }
  };

  return <LayoutWrapper Component={renderComponentByRoute()} />;
};


export default DynamicComponentRouter
