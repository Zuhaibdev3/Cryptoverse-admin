import requests from "./http.service";

const AuthServices = {
  login(body) {
    return requests.post(`/superadmin/signin`, body);
  },

  signup(body) {
    return requests.post(`/superadmin/signup`, body);
  },
  forgetPassword(body) {
    return requests.post(`/superadmin/forgot-password`, body);
  },
  verifyOtp(body) {
    return requests.post(`/superadmin/verify-otp`, body);
  },
  resetPassword(body) {
    return requests.post(`/superadmin/reset-password`, body);
  },
  logout() {
    return requests.delete(`/superadmin/signout`);
  },
  verify() {
    return requests.post(`/superadmin/verify`);
  },
  updateProfile(body) {
    return requests.put(`/superadmin/update-profile`, body);
  },
  getUsers() {
    return requests.get(`/superadmin/users`);
  },
};

export default AuthServices;
