import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../contacts/slice";
import { registerThunk, loginThunk, logoutThunk, refreshUser } from "./operations";

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

            .addCase(logoutThunk.fulfilled, (state) => {
                state.user = null;
                state.isLoggedIn = false,
                state.token = null;
            })


            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            })
    }
})

export const authReducer = authSlice.reducer;