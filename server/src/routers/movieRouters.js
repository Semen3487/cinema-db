const { Router } = require('express');
const movieController = require('../controllers/movieController');


const movieRouter = new Router();

movieRouter.route('/')
.get(movieController.getAllMovies)
.post(movieController.createMovie)
.put(movieController.updateMovie);

movieRouter.route('/:id')
.get(movieController.getOneMovie)
.patch(movieController.changeMovie)
.delete(movieController.deleteMovie);


module.exports = movieRouter;