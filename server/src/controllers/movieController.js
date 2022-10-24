const createError = require('http-errors');

const { Movie, sequelize } = require('../db/models');


class MovieController {

  async getAllMovies(req, res, next) {
    try {
      const allMovies = await Movie.findAll({raw: true});
      if(allMovies){
        console.log(`result is: ${JSON.stringify(allMovies, null, 2)}`);
        res.status(200).json(allMovies);
      } else{
        next(createError(404, `Movies were not found`));
      }
    } catch (error) {
      next(error);
      // console.log(error.message);
    };   
  };

  async getOneMovie(req, res, next) {
    try {
      const id = req.params.id;
      const movieByPk = await Movie.findByPk(id, {raw: true});
      if(movieByPk){
        console.log(`result is: ${JSON.stringify(movieByPk, null, 2)}`);
        res.status(200).json(movieByPk);
      } else{
        next(createError(404, `Movie was not found`));
      }
    } catch (error) {
      next(error);
      // console.log(error.message);
    }; 
  };

  async createMovie(req, res, next){
    const t = await sequelize.transaction();
    try {
      const body = req.body;
      const createMovie = await Movie.create(body, {transaction: t});
      if(createMovie){
        console.log(JSON.stringify(createMovie, null, 2));
        res.status(200).json(createMovie);
      } else{
        next(createError(412, `Movie was not create`));
      }
      t.commit();
    } catch (error) {
      next(error);
      t.rollback();
      // console.log(error.message);
    }; 
  };

  async updateMovie(req, res, next){
    const t = await sequelize.transaction();
      try {
        const body = req.body;
        const updateMovie = await Movie.update(body, {
          transaction: t,
          where: {
            id: body.id
          },
          returning: true,
          raw: true
        });
        if(updateMovie){
          console.log(JSON.stringify(updateMovie, null, 2));
          res.status(200).json(updateMovie); //* updateMovie[1] - ?
        } else{
          next(createError(412, `Movie was not update`));
        }
        t.commit();
      } catch (error) {
        next(error);
        t.rollback();
        // console.log(error.message);
      }; 
    };

  async changeMovie(req, res, next){
    const t = await sequelize.transaction();
    try {
      const { params: {id}, body } = req;
      const [rowsCount, [updateMovie]] = await Movie.update(body, {
        where: {id},
        raw: true,
        returning: true,
        transaction: t
      });
      if(rowsCount > 0){
        res.status(200).json(updateMovie);
        console.log(JSON.stringify(updateMovie, null, 2));
        t.commit();
      } else{
        next(createError(412, `Movie was not update by patch`));
        t.rollback();
      }
    } catch (error) {
      next(error);
      t.rollback();
      // console.log(error.message);
    }; 
  };
  
  

  async deleteMovie(req, res, next){
    const t = await sequelize.transaction();
    try {
      const id = req.params.id;
      const deleteMovie = await Movie.destroy({where: {id}});
      if(deleteMovie){
        res.send(res.statusCode);
        t.commit();
      } else{
        next(createError(404, `Movie was not delete`));
        t.rollback();
      }
    } catch (error) {
      next(error);
      t.rollback();
      // console.log(error.message);
    }; 
  };
  //* для пов'язаних таблиць необхідно вказати каскадність


};


module.exports = new MovieController();





//* server with SQL

// const db = require('../db/models');

// class MovieController {

//   async getAllMovies(req, res){
//     try {
//       const movies = await db.query(`SELECT * FROM movies`);
//       res.json(movies.rows);
//     } catch (error) {
//       console.log(error);
//     };   
//   };

//   async getOneMovie(req, res){
//     try {
//       const id = req.params.id;
//       const oneMovie = await db.query(
//           `SELECT * FROM movies WHERE movie_id=$1`, 
//           [id]
//         );
//       res.json(oneMovie.rows[0]);
//     } catch (error) {
//       console.log(error);
//     }; 
//   };

//   async createMovie(req, res){
//     try {
//       const {title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster} = req.body;
//       const newMovie = await db.query(
//         `INSERT INTO movies
//         (title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
//         RETURNING *`, 
//         [title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster]

//         // `INSERT INTO movies
//         // (title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster)
//         // VALUES ($1, $2, (SELECT id FROM genre WHERE title = $3), $4, $5, $6, $7, $8)
//         // RETURNING *`, 
//         // [title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster]
//       );
//       res.json(newMovie.rows[0]);
//     } catch (error) {
//       console.log(error);
//     };
//   };
  
//   async updateMovie(req, res){
//     try {
//       const {title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster, movie_id} = req.body;
//       const updateMovie = await db.query(
//         `UPDATE movies 
//         SET title = $1, release_year = $2, genre_id = $3 country_id = $4, studio_id = $5, 
//             director_id = $6, actor_id = $7, poster = $8
//         WHERE movie_id = $9
//         RETURNING *`,
//         [title, release_year, genre_id, country_id, studio_id, director_id, actor_id, poster, movie_id]
//       );
//       res.json(updateMovie.rows[0]);
//     } catch (error) {
//       console.log(error);
//     };
//   };

//   async deleteMovie(req, res){
//     try {
//       const id = req.params.id;
//       const deleteMovie = await db.query(
//         `DELETE FROM movies WHERE movie_id = $1
//         RETURNING *`,
//         [id]
//       );
//       res.json(deleteMovie.rows[0]);
//     } catch (error) {
//       console.log(error);
//     };
//   };

// };


// module.exports = new MovieController();