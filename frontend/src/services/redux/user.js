import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "Théo",
  lastname: "Coyral",
  userName: "theocoyral",
  email: "",
  token: "",
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserRX(state, action) {
      const updatedFields = action.payload; 
      return {
        ...state,
        ...updatedFields, 
      };
    },
    resetUser() {
      return {
        ...initialState, 
      };
    },
  },
});

export const { setUserRX , resetUser } = userSlice.actions;

export default userSlice.reducer;
