'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Director.belongsTo(models.Country);
      Director.belongsToMany(models.Movie, {through: 'Movies_Directors'});
    }
  }
  Director.init({
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    country_id: DataTypes.INTEGER,
    birth_date: DataTypes.DATEONLY,
    death_date: DataTypes.DATEONLY,
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Director',
    tableName: 'Directors',
  });
  return Director;
};