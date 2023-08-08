
import { useDispatch,useSelector } from "react-redux";
import { fetchContactsAddThunk } from "redux/contactsDetailsReducer";
import css from './ContactForm.module.css'

export function ContactForm() {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contactsDetails.contacts.items)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = e.currentTarget;
    
    const equalName = contacts.find(contact => name.value.toUpperCase() === contact.name.toUpperCase()) 
    if (equalName) return alert(`${equalName.name} is already in contacts`);

    const equalNumber = contacts.find(contact => phone.value === contact.phone) 
    if (equalNumber) return alert(`${equalNumber.phone} is already in contacts`);

    dispatch(fetchContactsAddThunk({
      createdAt: new Date().toString(),
      name: name.value,
      phone: phone.value
    }))

    name.value = "";
    phone.value = "";
  };
 
        return (
            <form onSubmit={handleSubmit} className={css.form__contacts}>
                <label>
                  <p className={css.form__text}>Name</p>
                  <input
                      className={css.input__form}
                      type="text"
                      name="name"
                      pattern="^[a-zA-Z]{1,8}"
                      title="The name can contain only letters, from 1 to 8 Latin letters"
                      required
                      />
                </label>
          
                <label>
                  <p className={css.form__text}>Number</p>
                  <input
                      className={css.input__form}
                      type="tel"
                      name="phone"
                      pattern="[0-9]{5,10}"
                      title="Phone number must be digit and have 5-10 digit"
                      required
                  />
                </label>
                
            <button className={css.btn__form} type="submit">Add contact</button>
            </form>
            
    )
};

