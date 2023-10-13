import skillService from "../service/skillService";

const readFunc = async (req, res) => {
  try {
    let data = [];
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      data = await skillService.getSkillWithPagination(+page, +limit);
    } else {
      data = await skillService.getAllSkill();
    }
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, //error code
      DT: data.DT, //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

const createFunc = async (req, res) => {
  try {
    let data = await skillService.createNewSkill(req.body);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, //error code
      DT: data.DT, //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

const updateFunc = async (req, res) => {
  try {
    let data = await skillService.updateSkill(req.body);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, //error code
      DT: data.DT, //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

const deleteFunc = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
};
