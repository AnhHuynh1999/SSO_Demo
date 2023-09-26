import api from "../ulits/api";

export const getUser = (params) => api.get("/v1/user/read", { params });

export const deleteUser = (data) =>
  api.delete("/v1/user/delete", { data: data });

export const addUser = (data) => api.post("/v1/user/create", data);

export const updateUser = (data) => api.put("/v1/user/update", data);
