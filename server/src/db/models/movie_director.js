'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie_Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie_Director.init({
    movie_id: DataTypes.INTEGER,
    director_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie_Director',
    tableName: 'Movies_Directors'
  });
  return Movie_Director;
};