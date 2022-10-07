const ACTIONS_TYPES = {
  //*movies
  //* get all
  GET_MOVIES_ACTION: 'GET_MOVIES_ACTION',
  GET_MOVIES_REQUEST: 'GET_MOVIES_REQUEST',
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS',
  GET_MOVIES_ERROR: 'GET_MOVIES_ERROR',
  //* create
  POST_MOVIE_ACTION: 'POST_MOVIE_ACTION',
  POST_MOVIE_REQUEST: 'POST_MOVIE_REQUEST',
  POST_MOVIE_SUCCESS: 'POST_MOVIE_SUCCESS',
  POST_MOVIE_ERROR: 'POST_MOVIE_ERROR',
  //* update
  PUT_MOVIE_ACTION: 'PUT_MOVIE_ACTION',
  PUT_MOVIE_REQUEST: 'PUT_MOVIE_REQUEST',
  PUT_MOVIE_SUCCESS: 'PUT_MOVIE_SUCCESS',
  PUT_MOVIE_ERROR: 'PUT_MOVIE_ERROR',
  //* delete
  DELETE_MOVIE_ACTION: 'DELETE_MOVIE_ACTION',
  DELETE_MOVIE_REQUEST: 'DELETE_MOVIE_REQUEST',
  DELETE_MOVIE_SUCCESS: 'DELETE_MOVIE_SUCCESS',
  DELETE_MOVIE_ERROR: 'DELETE_MOVIE_ERROR',

  //*actors
  //* get all
  GET_ACTORS_ACTION: 'GET_ACTORS_ACTION',
  GET_ACTORS_REQUEST: 'GET_ACTORS_REQUEST',
  GET_ACTORS_SUCCESS: 'GET_ACTORS_SUCCESS',
  GET_ACTORS_ERROR: 'GET_ACTORS_ERROR',
  //* create
  POST_ACTOR_ACTION: 'POST_ACTOR_ACTION',
  POST_ACTOR_REQUEST: 'POST_ACTOR_REQUEST',
  POST_ACTOR_SUCCESS: 'POST_ACTOR_SUCCESS',
  POST_ACTOR_ERROR: 'POST_ACTOR_ERROR',
  //* update
  PUT_ACTOR_ACTION: 'PUT_ACTOR_ACTION',
  PUT_ACTOR_REQUEST: 'PUT_ACTOR_REQUEST',
  PUT_ACTOR_SUCCESS: 'PUT_ACTOR_SUCCESS',
  PUT_ACTOR_ERROR: 'PUT_ACTOR_ERROR',
  //* delete
  DELETE_ACTOR_ACTION: 'DELETE_ACTOR_ACTION',
  DELETE_ACTOR_REQUEST: 'DELETE_ACTOR_REQUEST',
  DELETE_ACTOR_SUCCESS: 'DELETE_ACTOR_SUCCESS',
  DELETE_ACTOR_ERROR: 'DELETE_ACTOR_ERROR',

  //* directors
  //* get all
  GET_DIRECTORS_ACTION: 'GET_DIRECTORS_ACTION',
  GET_DIRECTORS_REQUEST: 'GET_DIRECTORS_REQUEST',
  GET_DIRECTORS_SUCCESS: 'GET_DIRECTORS_SUCCESS',
  GET_DIRECTORS_ERROR: 'GET_DIRECTORS_ERROR',
  //* create
  POST_DIRECTOR_ACTION: 'POST_DIRECTOR_ACTION',
  POST_DIRECTOR_REQUEST: 'POST_DIRECTOR_REQUEST',
  POST_DIRECTOR_SUCCESS: 'POST_DIRECTOR_SUCCESS',
  POST_DIRECTOR_ERROR: 'POST_DIRECTOR_ERROR',
  //* update
  PUT_DIRECTOR_ACTION: 'PUT_DIRECTOR_ACTION',
  PUT_DIRECTOR_REQUEST: 'PUT_DIRECTOR_REQUEST',
  PUT_DIRECTOR_SUCCESS: 'PUT_DIRECTOR_SUCCESS',
  PUT_DIRECTOR_ERROR: 'PUT_DIRECTOR_ERROR',
  //* delete
  DELETE_DIRECTOR_ACTION: 'DELETE_DIRECTOR_ACTION',
  DELETE_DIRECTOR_REQUEST: 'DELETE_DIRECTOR_REQUEST',
  DELETE_DIRECTOR_SUCCESS: 'DELETE_DIRECTOR_SUCCESS',
  DELETE_DIRECTOR_ERROR: 'DELETE_DIRECTOR_ERROR',

  //* studios
  //* get all
  GET_STUDIOS_ACTION: 'GET_STUDIOS_ACTION',
  GET_STUDIOS_REQUEST: 'GET_STUDIOS_REQUEST',
  GET_STUDIOS_SUCCESS: 'GET_STUDIOS_SUCCESS',
  GET_STUDIOS_ERROR: 'GET_STUDIOS_ERROR',
  //* create
  POST_STUDIO_ACTION: 'POST_STUDIO_ACTION',
  POST_STUDIO_REQUEST: 'POST_STUDIO_REQUEST',
  POST_STUDIO_SUCCESS: 'POST_STUDIO_SUCCESS',
  POST_STUDIO_ERROR: 'POST_STUDIO_ERROR',
  //* update
  PUT_STUDIO_ACTION: 'PUT_STUDIO_ACTION',
  PUT_STUDIO_REQUEST: 'PUT_STUDIO_REQUEST',
  PUT_STUDIO_SUCCESS: 'PUT_STUDIO_SUCCESS',
  PUT_STUDIO_ERROR: 'PUT_STUDIO_ERROR',
  //* delete
  DELETE_STUDIO_ACTION: 'DELETE_STUDIO_ACTION',
  DELETE_STUDIO_REQUEST: 'DELETE_STUDIO_REQUEST',
  DELETE_STUDIO_SUCCESS: 'DELETE_STUDIO_SUCCESS',
  DELETE_STUDIO_ERROR: 'DELETE_STUDIO_ERROR',

}

export default ACTIONS_TYPES;