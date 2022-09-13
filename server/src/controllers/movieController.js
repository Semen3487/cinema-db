const db = require('../db');

class MovieController {

  async getAllMovies(req, res){
      res.send('Ok');
    };

  async getOneMovie(req, res){
    res.send('Ok');
  };

  async createMovie(req, res){
    const {title, release_year, genre, studio_id} = req.body;
    const newMovie = await db.query(
      `INSERT INTO movies
      (title, release_year, genre, studio_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *`, 
      [title, release_year, genre, studio_id]
    );
    res.send('Ok');
  };
  
  async updateMovie(req, res){
    res.send('Ok');
  };

  async deleteMovie(req, res){
    res.send('Ok');
  };

};


module.exports = new MovieController();
