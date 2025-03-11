import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../redux/auth/operations';

const RegistrationPage = () => {
  const dispatch = useDispatch();
const initialValues = {
  name: '',
  email: '',
  password: '',
}

const handleSubmit = (values, actions) => {
  console.log(values);
  dispatch(registerThunk(values))
  actions.resetForm();
  
}

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name:</span>
            <Field name='name' />
          </label>
          <label>
            <span>Email:</span>
            <Field name='email' />
          </label>
          <label>
            <span>Password:</span>
            <Field name='password' type='password' />
          </label>
          <button type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationPage