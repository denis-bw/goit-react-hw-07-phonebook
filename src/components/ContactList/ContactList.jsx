import { useEffect } from 'react';
import css from './ListContacts.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsDataThunk, fetchContactsDeleteThunk } from "redux/contactsDetailsReducer";
import { Loader } from "components/Loader/Loader";

export const ContactList = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contactsDetails.contacts)
  const filterContacts = useSelector(state => state.contactsDetails.filter)
  const loader = useSelector(state => state.contactsDetails.contacts.isLoading)
  
  useEffect(() => {
    dispatch(fetchContactsDataThunk());
  }, [dispatch]);
  

  const visibleContact = contacts.items.filter(constact => constact.name.toUpperCase().includes(filterContacts))

    return (loader && <Loader/>) || <ul className={css.container__contact}>
                       { visibleContact?.map(el => {
                          return <li className={css.item__contact} key={el.id}>
                                    <p className={css.text__contact}>{el.name}: {el.phone}</p>
                                    <button className={css.btn__delete__contact} onClick={(e) => dispatch(fetchContactsDeleteThunk(el.id))} type="button">
                                      Delete
                                    </button>
                                  </li>
                              })}
                      </ul>
}

