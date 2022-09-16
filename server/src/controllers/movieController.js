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
      const {title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster} = req.body;
      const newMovie = await db.query(
        `INSERT INTO movies
        (title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *`, 
        [title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster]

        // `INSERT INTO movies
        // (title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster)
        // VALUES ($1, $2, (SELECT id FROM genre WHERE title = $3), $4, $5, $6, $7, $8)
        // RETURNING *`, 
        // [title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster]
      );
      res.json(newMovie.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };
  
  async updateMovie(req, res){
    try {
      const {title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster, movie_id} = req.body;
      const updateMovie = await db.query(
        `UPDATE movies 
        SET title = $1, release_year = $2, genre_id = $3 country_id = $4, studio_id = $5, 
            director_id = $6, actor_id = $7, poster = $8
        WHERE movie_id = $9
        RETURNING *`,
        [title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster, movie_id]
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
