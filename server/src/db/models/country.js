'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Country.hasMany(models.Studio);
      Country.hasMany(models.Actor);
      Country.hasMany(models.Director);
      Country.hasMany(models.Movie);
    }
  }
  Country.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    description: DataTypes.TEXT,
    flag: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Country',
    tableName: 'Countries',
  });
  return Country;
};