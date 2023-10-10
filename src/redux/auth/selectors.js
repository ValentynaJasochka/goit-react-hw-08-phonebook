export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthName = state => state.auth.user.name;
export const selectІsRefreshing = state => state.auth.user.isRefreshing;
