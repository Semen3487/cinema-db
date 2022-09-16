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

import { createStudioAction, updateStudioAction } from '../../store/actions/studioActions';
import { initStudio } from '../../constants';


function StudioForm() {

  const dispatch = useDispatch();
  const {studiosList: {studios}} = useSelector((state) => state);
  const {id} = useParams();
  const navigate = useNavigate();
  const currentStudio = studios.find((studio) => studio.id === parseInt(id));

  const goBackTo = () => navigate('/studios');

  const onStudioSubmit = (values, actions) => {
    !values.id
      ? dispatch(createStudioAction(values))
      : dispatch(updateStudioAction(values));
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
            <legend>Studio Title</legend>
            <Field name='title'/>
            <ErrorMessage name='title' >
                {(msg) => <div className='error' >{msg}</div>}
            </ErrorMessage>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Year of foundation</legend>
            <Field name='foundation_year' />
          </fieldset>
          {/* <fieldset className='form-item'>
            <legend>Country</legend>
            <Field name='country' as='select' >
              <option value={initStudio.values.country}>
                {initStudio.values.country}
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country} >
                  {country}
                </option>
              ))}
            </Field>
          </fieldset> */}
          <fieldset className='form-item'>
            <legend>Country</legend>
            <Field name='country' />
          </fieldset>
          <fieldset className='form-item'>
            <legend>Logo</legend>
            <Field name='logo' as='textarea' className='form-area'/>
          </fieldset>
          <fieldset className='form-item'>
            <legend>Site</legend>
            <Field name='web_site' as='textarea' className='form-area'/>
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
      initialValues={currentStudio ? currentStudio : initStudio}
      onSubmit={onStudioSubmit}
      validationSchema={schema}
      >
      {renderFormik}
    </Formik>
  )
}

export default StudioForm;