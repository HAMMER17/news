import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userCard: []
  },
  reducers: {
    addUserCard: (state, action) => {
      state.userCard = action.payload
    }
  }
})
export const { addUserCard } = userSlice.actions
export default userSlice.reducer