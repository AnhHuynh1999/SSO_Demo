import api from "../ulits/api";

export const getGroup = () => api.get("/v1/group/read");
