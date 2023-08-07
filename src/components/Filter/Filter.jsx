import css from './Filter.module.css'
import { filterOnName } from 'redux/contactsDetailsReducer'
import { useDispatch } from 'react-redux'

export const Filter = () => {

const dispatch = useDispatch()
const filterListAddState = (e) => {
  dispatch(filterOnName(e.currentTarget.value))
}
  
return <label className={css.label__find}>
          <p className={css.text__input__find}>Find contacts by name</p>
          <input
              className={css.input__find}
              onChange={filterListAddState}
              type="text"
              name="filter"
              pattern="^[a-zA-Z]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
       </label>   
}
