import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import { Suspense, lazy } from "react";
import './App.css'
// import ContactList from './components/ContactList/ContactList';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactForm from './components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations';
import { getIsError, getIsLoading } from './redux/contacts/selectors';
import Loader from './components/Loader/Loader';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFound from './pages/NotFoundPage/NotFound';


function App() {

  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getIsError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    // <>
    //   <ContactForm  />
    //   <SearchBox />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <ContactList  />
    // </>
    <div className="App">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>

      
    </div>
  )
}

export default App
