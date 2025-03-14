import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../contacts/slice";
import { registerThunk, loginThunk, logoutThunk, refreshUser } from "./operations";


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
            })
            // .addCase(registerThunk.rejected, handleRejected)

            //-------------------------------

            // .addCase(loginThunk.pending, handlePending)
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            // .addCase(loginThunk.rejected, handleRejected)

            //-------------------------------

            .addCase(logoutThunk.fulfilled, () => INITIAL_STATE.auth
                // state.user = null;
                // state.isLoggedIn = false,
                // state.token = null;
            )

            //-------------------------------

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