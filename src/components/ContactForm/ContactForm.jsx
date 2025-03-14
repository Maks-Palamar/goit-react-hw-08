import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from './ContactForm.module.css'
// import { addContact } from '../../redux/contacts/operations';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';


const ContactForm = () => {
    
    const dispatch = useDispatch();

    const nameId = useId();
    const numberId = useId();

    const addNewContact = (contact) => {
        dispatch(addContact(contact))
    }

    const initialValues = {
        name: "",
        number: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        addNewContact({
            // name: values.name,
            // number: values.number
            ...values,
            id: nanoid(),
        })
        resetForm()
    }

    const contactSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().required("Required")
    })

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
          <Form className={css.contForm}>
              <div className={css.allFields}>
                  <div className={css.fieldContainer}> 
                      {/* <p className={css.fieldName}>Name</p> */}
                      <Field type="text" name="name" id={nameId} className={css.field} placeholder='Enter contact`s name' />
                      {/* <ErrorMessage name="name" component="span" className={css.errorMes} /> */}
                  </div>
                      
                  <div className={css.fieldContainer}>
                      {/* <p className={css.fieldName}>Number</p> */}
                      <Field type="number" name="number" id={numberId} className={css.field} placeholder='Enter contact`s number' />
                      {/* <ErrorMessage name="number" component="span" className={css.errorMes} /> */}
                  </div>
              </div>
              <button type='submit' className={css.formbutton}>
              <svg 
                width="50" 
                height="50" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="0" fill="rgba(255, 255, 255, 0)"/>
                <line x1="12" y1="6" x2="12" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="12" x2="18" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg> 
              </button>
          </Form>
    </Formik>
  )
}

export default ContactForm