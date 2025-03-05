import { searchContact } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {

    const dispatch = useDispatch();

    const value = useSelector( selectFilter );

    const onChange = (newvalue) => {
        dispatch(searchContact(newvalue))
    }
    
    return (
        <>
        <div>
            <p>Search contacts by name</p>
            <input type="text" value={value} onChange={event => onChange(event.target.value)}/>
        </div>
        
    </>
  )
}

export default SearchBox