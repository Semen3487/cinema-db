import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MovieForm from '../Movies/MovieForm';
import DirectorForm from '../Directors/DirectorForm';
import ActorForm from '../Actors/ActorForm';
import StudioForm from '../Studios/StudioForm';


function CinemaService() {
  return (
    <>
      <h2>Service</h2>
      <Routes>
        <Route path='/movies/new' element={<MovieForm />} />
        <Route path='/movies/new/:id' element={<MovieForm />} />
        <Route path='/actors/new' element={<ActorForm />} />
        <Route path='/actors/new/:id' element={<ActorForm />} />
        <Route path='/directors/new' element={<DirectorForm />} />
        <Route path='/directors/new/:id' element={<DirectorForm />} />
        <Route path='/studios/new' element={<StudioForm />} />
        <Route path='/studios/new/:id' element={<StudioForm />} />
      </Routes>
    </>
    
  )
}

export default CinemaService;