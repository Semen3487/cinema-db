const db = require('../db');

class MovieController {

  async getAllMovies(req, res){
    try {
      const movies = await db.query(`SELECT * FROM movies`);
      res.json(movies.rows);
    } catch (error) {
      console.log(error);
    };   
  };

  async getOneMovie(req, res){
    try {
      const id = req.params.id;
      const oneMovie = await db.query(
          `SELECT * FROM movies WHERE movie_id=$1`, 
          [id]
        );
      res.json(oneMovie.rows[0]);
    } catch (error) {
      console.log(error);
    }; 
  };

  async createMovie(req, res){
    try {
      const {title, release_year, genre, studio_id} = req.body;
      const newMovie = await db.query(
        `INSERT INTO movies
        (title, release_year, genre, studio_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *`, 
        [title, release_year, genre, studio_id]
      );
      res.json(newMovie.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };
  
  async updateMovie(req, res){
    try {
      const {title, release_year, genre, studio_id, movie_id} = req.body;
      const updateMovie = await db.query(
        `UPDATE movies 
        SET title = $1, release_year = $2,
            genre = $3, studio_id = $4
        WHERE movie_id = $5
        RETURNING *`,
        [title, release_year, genre, studio_id, movie_id]
      );
      res.json(updateMovie.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };

  async deleteMovie(req, res){
    try {
      const id = req.params.id;
      const deleteMovie = await db.query(
        `DELETE FROM movies WHERE movie_id = $1
        RETURNING *`,
        [id]
      );
      res.json(deleteMovie.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };

};


module.exports = new MovieController();
