import React from 'react'
import { Formik, Form, Field } from 'formik'
// import LoginForm from '../../components/LoginForm/LoginForm'
import LoginPage from '../LoginPage/LoginPage'
import css from './HomePage.module.css'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const HomePage = () => {

  const isLoggedIn = useSelector

  return (
    <div className={css.homePage}>
      <h1>Welcome to your personal Contacts Book</h1>
        <NavLink to>
          <div className={css.homeCard}>
            <p>Add new contact right now!</p>
            <div className={css.plusIcon}>
              <svg 
                width="50" 
                height="50" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="0" fill="rgba(255, 255, 255, 0.3)"/>
                <line x1="12" y1="6" x2="12" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="12" x2="18" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg> 
            </div>
        </div>
        </NavLink>

    </div>
  )
}

export default HomePage