import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack/Stack';
import { Button } from '@mui/material';
import * as Yup from 'yup';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ClearIcon from '@mui/icons-material/Clear';

import { createMovieAction, updateMovieAction } from '../../store/actions/moviesActions';
import { initMovie } from '../../constants';



function MovieForm() {

  const dispatch = useDispatch();

  const {moviesList: {movies}} = useSelector((state) => state);

  const {id} = useParams();
  const navigate = useNavigate();

  const currentMovie = movies.find((movie) => movie.id === parseInt(id));

  const goBackTo = () => {
    navigate('/movies')
  };

  const onMovieSubmit = (values, actions) => {
    !values.id
      ? dispatch(createMovieAction(values))
      : dispatch(updateMovieAction(values));
      goBackTo();
  };

  const schema = Yup.object().shape({
    title: Yup.string().required('Field is required')
  });

  const renderFormik = (props) => {
    return (
      <Form className='form-inner'>
        <Stack>
          <fieldset className='form-item'>
            <legend>Movie Title</legend>
              <Field name='title'/>
            <ErrorMessage name='title' >
                {(msg) => <div className='error' >{msg}</div>}
            </ErrorMessage>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Year</legend>
              <Field name='release_year'/>
            <legend>Genre</legend>
              <Field name='genre'/>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Country</legend>
            <Field name='country'/>
            <legend>Studio</legend>
              <Field name='studio'/>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Director</legend>
              <Field name='director'/>
            <legend>Actor</legend>
              <Field name='actor'/>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Poster</legend>
            <Field name='poster' as='textarea' className='form-area'/>
          </fieldset>
          <Stack direction='row' spacing={2} justifyContent='center' className='form-button'>
            <Button type='submit' variant='contained' size='medium'
                    startIcon={<SaveIcon/>}
                    disabled={!props.isValid}>
                      Save
            </Button>
            <Button type='button' variant='contained' size='medium'
                    onClick={goBackTo}
                    startIcon={<KeyboardReturnIcon/>}>
                      Return
            </Button>
            <Button type='reset' variant='contained' size='medium'
                    startIcon={<ClearIcon/>}>
                      Reset
            </Button>
          </Stack>
        </Stack>
      </Form>
    )
  }

  return (
    <Formik
      initialValues={currentMovie ? currentMovie : initMovie}
      onSubmit={onMovieSubmit}
      validationSchema={schema}
      >
      {renderFormik}
    </Formik>
  )
}

export default MovieForm;


