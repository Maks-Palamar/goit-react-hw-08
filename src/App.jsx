import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import { Suspense, lazy } from "react";
import './App.css'
// import ContactList from './components/ContactList/ContactList';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactForm from './components/ContactForm/ContactForm';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from './redux/contacts/operations';
// import { getIsError, getIsLoading } from './redux/contacts/selectors';
import Loader from './components/Loader/Loader';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFound from './pages/NotFoundPage/NotFound';
import Layout from './components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefresing } from './redux/auth/selectors';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';


function App() {

  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getIsError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefresing);

  return isRefreshing ? null : (
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/contacts" element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>} />
            </Route>
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo='/' />} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
        </Suspense>
      </div>
  )
}

export default App
