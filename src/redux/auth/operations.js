import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authInstance = axios.create({
    baseURL: 'https://connections-api.goit.global/',
})

const setAuthHeader = token => { authInstance.defaults.headers.common.Authorization = `Bearer ${token}` };
const clearAuthHeader = () => { authInstance.defaults.headers.common.Authorization = `` };

export const registerThunk = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const {data} = await authInstance.post('/users/signup', body);
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);   
    }
})

//mmmpyramid@gmail.com
//alex112233@mail.com

export const loginThunk = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const {data} = await authInstance.post('/users/login', body);
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);   
    }
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await authInstance.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);   
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const savedToken = thunkAPI.getState().auth.token;
        console.log(savedToken);
        
        if (savedToken === null) {
           return thunkAPI.rejectWithValue('Token doesn`t exist');
        }
        setAuthHeader(savedToken);
        const {data} = await authInstance.get('/users/current');
        return data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})