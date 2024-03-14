import { createSlice } from "@reduxjs/toolkit";

const initialSlice = createSlice({
  name: "initial",
  initialState: {
    isUserLoggedIn: false,
    user: {},
  },
  reducers: {
    setUserLogin(state, action) {
      state.isUserLoggedIn = true;
      state.user = action.payload;
    },
    setUserLogout(state) {
      state.isUserLoggedIn = false;
      state.user = {};
    },
  },
});

export const { setUserLogin, setUserLogout } = initialSlice.actions;
export default initialSlice.reducer;
