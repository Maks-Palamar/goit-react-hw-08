import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../redux/auth/operations';
import css from './RegistrationPage.module.css'
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <Form className={css.regForm}>
          <h1 className={css.regFormHeader}>Registration</h1>
          <label className={css.regFormLabel}>
            <span className={css.regFormSpan}>Name:</span>
            <Field className={css.regFormInp} name='name' placeholder='Your name' />
          </label>
          <label className={css.regFormLabel}>
            <span className={css.regFormSpan}>Email:</span>
            <Field className={css.regFormInp} name='email' placeholder='your@mail.com' />
          </label>
          <label className={css.regFormLabel}>
            <span className={css.regFormSpan}>Password:</span>
            <Field className={css.regFormInp} name='password' type='password' placeholder='password' />
          </label>
          <button className={css.regFormBtn} type='submit'>Register</button>
          <p className={css.regFormText}>Already have an account? <span className={css.textSpan} onClick={() => navigate('/login')}>Login</span></p>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationPage