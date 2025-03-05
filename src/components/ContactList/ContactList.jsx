import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/slice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
        <ul className={css.contactList}>
          {filteredContacts.map((oneContact) => (
              <li key={oneContact.id} className={css.contact}>
                  <Contact key={oneContact.id} data={oneContact}/>
              </li>
          ))}
        </ul>
  )
}

export default ContactList