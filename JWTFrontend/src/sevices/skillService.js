import api from "../ulits/api";

const getSkill = (params) => api.get("/v1/skill/read", { params });

const deleteSkill = (data) => api.delete("/v1/skill/delete", { data: data });

const addSkill = (data) => api.post("/v1/skill/create", data);

const updateSkill = (data) => api.put("/v1/skill/update", data);

const skillService = {
  getSkill,
  deleteSkill,
  addSkill,
  updateSkill,
};

export default skillService;
