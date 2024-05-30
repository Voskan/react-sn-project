import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/users/slices/userSlice";
import authReducer from "@/features/users/slices/authSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
