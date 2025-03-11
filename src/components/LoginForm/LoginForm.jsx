import React from 'react'
import { Formik, Form, Field } from 'formik'

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
    <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field type='email' name='email'/>
                <Field type='text' name='password'/>
                <button type='submit'>Login</button>
            </Form>
         </Formik>
    </div>
  )
}

export default LoginForm