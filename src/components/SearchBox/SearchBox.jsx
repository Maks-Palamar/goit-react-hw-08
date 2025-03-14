import { searchContact } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './Searchbox.module.css'

const SearchBox = () => {

    const dispatch = useDispatch();

    const value = useSelector( selectFilter );

    const onChange = (newvalue) => {
        dispatch(searchContact(newvalue))
    }
    
    return (
        <div className={css.searchBox}>
            <p className={css.searchLabel}>Search contacts by name</p>
            <input className={css.searchInp} type="text" value={value} onChange={event => onChange(event.target.value)} placeholder='Start entering name' />
        </div>
  )
}

export default SearchBox