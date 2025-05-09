import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getIsError, getIsLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import css from './ContactsPage.module.css'

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getIsError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


  return (
    <div className={css.contactsPage}>
      <ContactForm  />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList  />
    </div>
  )
}

export default ContactsPage