'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Studio.belongsTo(models.Country);
      Studio.hasMany(models.Movie);
    }
  }
  Studio.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    foundation_year: DataTypes.DATEONLY,
    country_id: DataTypes.INTEGER,
    logo: DataTypes.TEXT,
    web_site: {
      type: DataTypes.TEXT,
      validate: {
        isEmail: true
      }
    } 
  }, {
    sequelize,
    modelName: 'Studio',
    tableName: 'Studios',
  });
  return Studio;
};