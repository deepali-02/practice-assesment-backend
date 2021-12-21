"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      space.belongsTo(models.user);
      space.hasMany(models.story);
      // define association here
    }
  }
  space.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      backgroundColor: DataTypes.STRING,
      color: DataTypes.STRING,
      userId: DataTypes.INTERGER,
    },
    {
      sequelize,
      modelName: "space",
    }
  );
  return space;
};
