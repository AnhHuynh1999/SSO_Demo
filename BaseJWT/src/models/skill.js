"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  //object relational mapping
  Skill.init(
    {
      name: DataTypes.STRING,
      proficiency: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Skill",
    }
  );
  return Skill;
};
