import { createSlice} from "@reduxjs/toolkit";  
import { addContact, fetchContacts, deleteContact } from "./operations";

export const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
	},
  filters: {
		name: ""
	},
  auth: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  }
}

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
    //-----------------------------------
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
    //-----------------------------------
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const newContacts = state.items.filter(contact => contact.id !== action.payload.id);
        state.items = newContacts;
      })
      .addCase(deleteContact.rejected, handleRejected)
  }
});

export const contactsReducer = contactsSlice.reducer;