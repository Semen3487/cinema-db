'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.Studio);
      Movie.belongsTo(models.Country);
      Movie.belongsToMany(models.Genre, {through: 'Movies_Genres'});
      Movie.belongsToMany(models.Actor, {through: 'Movies_Actors'});
      Movie.belongsToMany(models.Director, {through: 'Movies_Directors'});
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: DataTypes.DATEONLY,
    country_id: DataTypes.INTEGER,
    studio_id: DataTypes.INTEGER,
    poster: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'Movies',
  });
  return Movie;
};