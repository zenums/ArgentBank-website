import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "Théo",
  lastname: "Coyral",
  email: "",
  userName: "",
  token: "",
  isLogin: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const updatedFields = action.payload; 
      return {
        ...state,
        ...updatedFields, 
      };
    },
    resetUser(state) {
      return {
        ...initialState, 
      };
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
