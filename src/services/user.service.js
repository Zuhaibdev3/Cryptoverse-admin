import requests from "./http.service";

const UserServices = {
  getUsers() {
    return requests.get(`/superadmin/users`);
  },
};

export default UserServices;
