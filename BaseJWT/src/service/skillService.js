import db from "../models/index";

const getSkillWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;

    const { count, rows } = await db.Skill.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "name", "proficiency"],
      order: [["id", "DESC"]],
    });

    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      skills: rows,
    };

    return {
      EM: "fetch ok",
      EC: 0,
      DT: data,
    };
  } catch (e) {
    return {
      EM: "something wrongs with servies",
      EC: 1,
      DT: [],
    };
  }
};

const getAllSkill = async () => {
  try {
    let skills = await db.Skill.findAll({
      attributes: ["id", "name", "proficiency"],
    });
    if (skills) {
      return {
        EM: "get data success",
        EC: 0,
        DT: skills,
      };
    } else {
      return {
        EM: "get data success",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: "something wrongs with servies",
      EC: 1,
      DT: [],
    };
  }
};

const createNewSkill = async (data) => {
  try {
    await db.Skill.create(data);
    return {
      EM: "create ok",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    return {
      EM: "something wrongs with servies",
      EC: 1,
      DT: [],
    };
  }
};

const updateSkill = async (data) => {
  try {
    let skill = await db.Skill.findOne({
      where: { id: data.id },
    });

    if (skill) {
      //update
      await skill.update({
        name: data.name,
        proficiency: data.proficiency,
      });

      return {
        EM: "Update skill succeeds",
        EC: 0,
        DT: "",
      };
    } else {
      //not found
      return {
        EM: "Skill not found",
        EC: 2,
        DT: "",
      };
    }
  } catch (error) {
    return {
      EM: "something wrongs with servies",
      EC: 1,
      DT: [],
    };
  }
};

const deleteSkill = () => {
  try {
  } catch (error) {
    return {
      EM: "something wrongs with servies",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  getSkillWithPagination,
  getAllSkill,
  createNewSkill,
  updateSkill,
  deleteSkill,
};
