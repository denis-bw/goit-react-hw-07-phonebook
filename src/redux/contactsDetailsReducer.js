import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {fethContactsDetails} from '../api/apiContacts'

export const fetchContactsDataThunk = createAsyncThunk('contactsDetails/fetchContactsDataThunk',
     (_, thunkApi) => {
        try {
            const contactsData = fethContactsDetails();
            return contactsData
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.massage)
        }
}
)



const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}

 const contactsDetailsSlice = createSlice({
    name: 'contactsDetails',
    initialState,
    reducers: {
        setContacts: (state, action) => {
            // state.contacts = [...state.contacts, action.payload]
        },
        deleteContact: (state, action) => {
            // const index = state.contacts.findIndex(contact => contact.id === action.payload)
            // state.contacts.splice(index, 1);
        },
        filterOnName: (state, action) => {
            state.filter = action.payload.toUpperCase();
        }
     },
     extraReducers: builder => builder
         .addCase(fetchContactsDataThunk.pending, (state, action) => {
             state.contacts.isLoading = true;
             state.contacts.error = null;
         })
         .addCase(fetchContactsDataThunk.fulfilled, (state, action) => { 
             state.contacts.isLoading = false;
             state.contacts.items = action.payload;
             
         })
        .addCase(fetchContactsDataThunk.rejected, (state, action) => { 
            state.contacts.isLoading = false;
            state.contacts.error = action.payload ?? action.error.message;
         })
})


export const { setContacts, deleteContact, filterOnName } = contactsDetailsSlice.actions;
export const contactsDetailsReducer = contactsDetailsSlice.reducer;