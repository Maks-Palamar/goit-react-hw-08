import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../contacts/slice";
import { registerThunk, loginThunk, logoutThunk } from "./operations";

const handlePending = (state) => {
    INITIAL_STATE.contacts.loading = true;
  };
  
  const handleRejected = (state, action) => {
    INITIAL_STATE.contacts.loading = false;
    INITIAL_STATE.contacts.error = action.payload;
  };

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE.auth,
    extraReducers: builder => {
        builder 

            // .addCase(registerThunk.pending, handlePending)
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                // INITIAL_STATE.contacts.error = null;
                // INITIAL_STATE.contacts.loading = false;
            })
            // .addCase(registerThunk.rejected, handleRejected)

            //-------------------------------

            // .addCase(loginThunk.pending, handlePending)
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                // INITIAL_STATE.contacts.error = null;
                // INITIAL_STATE.contacts.loading = false;
            })
            // .addCase(loginThunk.rejected, handleRejected)

            .addCase(logoutThunk.fulfilled, () => INITIAL_STATE)
    }
})

export const authReducer = authSlice.reducer;