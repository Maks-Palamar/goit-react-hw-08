export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefresing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token;