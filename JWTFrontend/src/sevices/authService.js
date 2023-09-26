import api from "../ulits/api";

const login = (data) => api.post("/v1/login", data);

const register = (data) => api.post("/v1/register", data);

const authService = {
  login,
  register,
};

export default authService;
