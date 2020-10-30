import Axios from "axios";

const ApiService = {
  users: {
    getUser: () => Axios.get("/api/user").then(response => response.data),
  },
  projects: {
    getProjects: () =>
      Axios.get("/api/projects").then(response => response.data),
  },
};

export default ApiService;
