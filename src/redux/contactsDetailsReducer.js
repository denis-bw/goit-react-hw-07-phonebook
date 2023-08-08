import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {fethContactsDetails,fethContactsDelete, fethContactsAdd} from '../api/apiContacts'

export const fetchContactsDataThunk = createAsyncThunk('contactsDetails/fetchContactsDataThunk',
    async (_, thunkApi) => {
        try {
            const contactsData = await fethContactsDetails();
            return contactsData;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.massage)
        }
}
)

export const fetchContactsAddThunk = createAsyncThunk('contactsDetails/fetchContactsAddThunk',
    async (contact, thunkApi) => {
        try {
            const contactData = await fethContactsAdd(contact);
            return contactData;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.massage)
        }
})

export const fetchContactsDeleteThunk = createAsyncThunk('contactsDetails/fetchContactsDeleteThunk',
    async (idContact, thunkApi) => {
        try {
            const contactData = await fethContactsDelete(idContact);
            return contactData;
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
         .addCase(fetchContactsDeleteThunk.pending, (state, action) => {
             state.contacts.isLoading = true;
             state.contacts.error = null;
         })
        .addCase(fetchContactsDeleteThunk.fulfilled, (state, action) => { 
            state.contacts.isLoading = false;
            const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id)
            state.contacts.items.splice(index, 1);
            state.contacts.error = null;
         })
        .addCase(fetchContactsDeleteThunk.rejected, (state, action) => { 
            state.contacts.isLoading = false;
            state.contacts.error = action.payload ?? action.error.message;
        })
         .addCase(fetchContactsAddThunk.pending, (state, action) => {
             state.contacts.isLoading = true;
             state.contacts.error = null;
         })
        .addCase(fetchContactsAddThunk.fulfilled, (state, action) => { 
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = [...state.contacts.items, action.payload ];
         })
        .addCase(fetchContactsAddThunk.rejected, (state, action) => { 
            state.contacts.isLoading = false;
            state.contacts.error = action.error.message;
         })
})


export const { setContacts, deleteContact, filterOnName } = contactsDetailsSlice.actions;
export const contactsDetailsReducer = contactsDetailsSlice.reducer;