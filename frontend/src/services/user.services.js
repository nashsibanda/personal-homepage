import Axios from "axios";
const baseUrl = "/api/user";

const UserServices = {
  getUser: () => Axios.get(baseUrl).then(response => response.data),
};

export default UserServices;
