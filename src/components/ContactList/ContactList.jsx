import { useEffect } from 'react';
import css from './ListContacts.module.css'
import { useSelector,useDispatch } from 'react-redux';
import { deleteContact, fetchContactsDataThunk } from "redux/contactsDetailsReducer";

export const ContactList = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contactsDetails.contacts)
  const filterContacts = useSelector(state => state.contactsDetails.filter)
  
  useEffect(() => {
    dispatch(fetchContactsDataThunk());
  }, [dispatch]);

  
  const visibleContact = contacts.items.filter(constact => constact.name.toUpperCase().includes(filterContacts))

    return <ul className={css.container__contact}>
                  { visibleContact?.map(el => {
                    return <li className={css.item__contact} key={el.id}>
                              <p className={css.text__contact}>{el.name}: {el.number}</p>
                              <button className={css.btn__delete__contact} onClick={(e) => dispatch(deleteContact(el.id))} type="button">
                                Delete
                              </button>
                            </li>
                        })}
                </ul>
}

