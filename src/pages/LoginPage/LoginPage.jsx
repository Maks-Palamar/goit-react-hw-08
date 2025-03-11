import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const initialValues = {
  email: '',
  password: '',
}

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
  dispatch(loginThunk(values)).unwrap()
    .then((res) => {navigate('/contacts', {replace: true}); toast.success(`Hello ${res.user.name}`)})
    .catch(() => toast.error('Invalid data'));
  
}

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Email:</span>
            <Field name='email' />
          </label>
          <label>
            <span>Password:</span>
            <Field name='password' type='password' />
          </label>
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage