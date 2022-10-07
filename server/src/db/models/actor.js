'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Actor.init({
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    country_id: DataTypes.INTEGER,
    birth_date: DataTypes.DATEONLY,
    age: DataTypes.INTEGER,
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};