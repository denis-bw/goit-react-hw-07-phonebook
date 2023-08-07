import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contacts: [],
    filter: '',
};

 const contactsDetailsSlice = createSlice({
    name: 'contactsDetails',
    initialState,
    reducers: {
        setContacts: (state, action) => {
            state.contacts = [...state.contacts, action.payload]
        },
        deleteContact: (state, action) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload)
            state.contacts.splice(index, 1);
        },
        filterOnName: (state, action) => {
            state.filter = action.payload.toUpperCase();
        }
    }
})


export const { setContacts, deleteContact, filterOnName } = contactsDetailsSlice.actions;
export const contactsDetailsReducer = contactsDetailsSlice.reducer;