import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import  Stack  from '@mui/material/Stack/Stack';
import EditIcon from '@mui/icons-material/Edit';
import  DeleteIcon  from '@mui/icons-material/Delete';

import { deleteMovieAction } from '../../store/actions/moviesActions';


function MoviesList({movies}) {

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteMovieAction(id))
  };

  return (
    <>
      <ul>
          {movies.map((movie) => (
            <li key={movie.id}
                className='main-item'>
              <Stack direction='row' 
                     spacing={3}
                     justifyContent='flex-end'
                     alignItems='center'>
                <Link to={`${movie.id}`} >
                  <div className='main-item-title'>{movie.title}</div>
                </Link>
                <Link to={`new/${movie.id}`} >
                  <EditIcon />
                </Link>
                <DeleteIcon onClick={() => onDelete(movie.id)} />
              </Stack>
            </li>
          ))}
      </ul>
    </>
  )
}

export default MoviesList;