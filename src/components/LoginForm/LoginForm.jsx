import React from 'react'
import { Formik, Form, Field } from 'formik'
import css from './LoginForm.module.css'

const LoginForm = () => {

    const initialValues = {
        email: "",
        password: "",
    }

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    }
  return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.loginForm}>
                <Field type='email' name='email' className={css.loginField} />
                <Field type='text' name='password' className={css.loginField} />
                <button type='submit' className={css.loginBtn}>Login</button>
            </Form>
         </Formik>
  )
}

export default LoginForm