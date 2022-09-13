const Router = require('express');

const { 
  getAllMovies, 
  createMovie, 
  getOneMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/movieController');


const router = new Router();

router.route('/movies')
.get(getAllMovies)
.post(createMovie)
.put(updateMovie);

router.route('/movies/:id')
.get(getOneMovie)
.delete(deleteMovie);


module.exports = router;