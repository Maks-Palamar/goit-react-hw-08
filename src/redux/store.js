import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from "./auth/slice";

// const persistConfig = {
// 	key: 'root',
// 	version: 1,
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: authReducer,
    },
    // middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	// 		},
	// 	}),
});

// export const persistor = persistStore(store)

export default store