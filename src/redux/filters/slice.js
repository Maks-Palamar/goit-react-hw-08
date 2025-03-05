import { createSlice, createSelector } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../contacts/slice";
import { selectContacts } from "../contacts/selectors";
import { selectFilter } from "./selectors";

const filterSlice = createSlice({
    name: "filter",
    initialState: INITIAL_STATE.filters,
    reducers: {

        searchContact(state, action) {
            state.name = action.payload
        }
    }
})


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const { searchContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// export const { selectFilter } = filterSlice.selectors