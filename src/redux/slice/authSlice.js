import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
    idToken: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIdToken: (state, action) => {
      state.idToken = action.payload;
    },
    clearUser: (state) => {
      (state.user = null), (state.idToken = '');
    },
    setCameraImage: (state, action) => {
      state.imageCamera = action.payload;
  },
  },
});

export const { setIdToken, setUser, clearUser, setCameraImage } = authSlice.actions;

export default authSlice.reducer;