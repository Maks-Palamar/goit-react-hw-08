import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import css from './LoginPage.module.css'

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
        <Form className={css.logForm}>
          <h1 className={css.logFormHeader}>Login</h1>
          <label className={css.logFormLabel}>
            <span className={css.logFormSpan}>Email:</span>
            <Field className={css.logFormInp} name='email' placeholder='your@mail.com' />
          </label>
          <label className={css.logFormLabel}>
            <span className={css.logFormSpan}>Password:</span>
            <Field className={css.logFormInp} name='password' type='password' placeholder='password' />
          </label>
          <button className={css.logFormBtn} type='submit'>Login</button>
          <p className={css.logFormText}>Don`t have account yet? <span className={css.textSpan} onClick={() => navigate('/register')}>Register</span></p>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage