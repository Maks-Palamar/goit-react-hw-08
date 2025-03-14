import { useDispatch } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice/contactsSlice";
import { deleteContact } from "../../redux/contacts/operations";
import css from './Contact.module.css'


const Contact = ({ data }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(data.id))
  }

  return (
    <div className={css.contact}>
          <div className={css.textWrap}>
            <p className={css.contactName}>{data.name}</p>
            <p className={css.contactNum}>{data.number}</p>
          </div>
          <button className={css.contactBtn} onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M3 6h18M19 6l-1.5 15H6.5L5 6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M10 11v6M14 11v6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
  </svg>
          </button>
    </div>
  )
}

export default Contact