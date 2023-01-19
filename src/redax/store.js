import { configureStore } from "@reduxjs/toolkit";
import userReduser from '../redax/reduser'

export const store = configureStore({
  reducer: {
    user: userReduser,
  },
})