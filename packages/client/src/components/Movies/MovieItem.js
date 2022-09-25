import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { initMovie } from '../../constants';


function MovieItem({movies}) {

  const { id } = useParams();
  const film = movies.find((movie) => movie.id === parseInt(id));
  const movie = film ? film : initMovie;

  return (
    <div className='item-content'>
      <Grid container>
        <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
          <h1>{movie.title}</h1>
        </Grid>
        <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
          <img src={movie.poster} alt='poster'/>
        </Grid>
        <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
          <Stack>
            <h2>The main role</h2>
            {movie.actors.map((actor, index) => (
              <span key={index}>{actor}</span>
            ))}
            <h2>Director</h2>
            {movie.directors.map((director, index) => (
              <span key={index}>{director}</span>
            ))}
            <h2>Studio</h2>
            {movie.studios.map((studio, index) => (
              <span key={index}>{studio}</span>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
};

export default MovieItem;