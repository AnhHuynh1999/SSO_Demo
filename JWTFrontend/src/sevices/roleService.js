import api from "../ulits/api";

const createRoles = (data) => api.post("/v1/role/create", data);

const getRoles = (params) => api.get("/v1/role/read", { params });

const getRoleByGroup = (groupId) => api.get(`/v1/role/by-group/${groupId}`);

const assignRoleToGroup = (data) => api.post("/v1/role/assign-to-group", data);

const deleteRole = (data) => api.delete("/v1/role/delete", { data: data });

const roleService = {
  createRoles,
  getRoleByGroup,
  assignRoleToGroup,
  getRoles,
  deleteRole,
};

export default roleService;
