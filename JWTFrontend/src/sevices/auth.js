import api from "../ulits/api";

export const login = (data) => api.post("/v1/login", data);

export const register = (data) => api.post("/v1/register", data);
