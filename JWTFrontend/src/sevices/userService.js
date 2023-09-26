import api from "../ulits/api";

const getUser = (params) => api.get("/v1/user/read", { params });

const deleteUser = (data) => api.delete("/v1/user/delete", { data: data });

const addUser = (data) => api.post("/v1/user/create", data);

const updateUser = (data) => api.put("/v1/user/update", data);

const getInfoUser = () => api.get("/v1/account");

const userService = {
  getUser,
  deleteUser,
  addUser,
  updateUser,
  getInfoUser,
};

export default userService;
